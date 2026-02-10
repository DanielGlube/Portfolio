import React, { useState, useEffect, useRef } from 'react';
import { SOCIAL_LINKS } from '../constants.ts';

const CELL_SIZE = 20;
const GRID_WIDTH = 16;
const GRID_HEIGHT = 14;
const INITIAL_SPEED = 120;

export const Contact: React.FC = () => {
  // Game State
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'IDLE' | 'PLAYING' | 'GAME_OVER'>('IDLE');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Mutable Game State
  const snakeRef = useRef<{x: number, y: number}[]>([{ x: 8, y: 10 }]);
  const foodRef = useRef({ x: 8, y: 4 });
  const directionRef = useRef({ x: 0, y: -1 });
  const nextDirectionRef = useRef({ x: 0, y: -1 });
  const gameLoopRef = useRef<number | null>(null);
  const scoreRef = useRef(0);
  
  // Audio Context Ref
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize Audio Context
  const initAudio = () => {
    if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
            audioContextRef.current = new AudioContextClass();
        }
    }
    if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
    }
  };

  const playSound = (type: 'eat' | 'die') => {
      if (!audioContextRef.current) return;
      
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      const now = ctx.currentTime;

      if (type === 'eat') {
          // High pitched "bloop"
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
          
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
          
          osc.start(now);
          osc.stop(now + 0.1);
      } else if (type === 'die') {
          // Low pitched "crash"
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(200, now);
          osc.frequency.exponentialRampToValueAtTime(50, now + 0.5);
          
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
          
          osc.start(now);
          osc.stop(now + 0.5);
      }
  };

  // Draw Function
  const drawGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = '#0f172a'; // Match card background (navy-900)
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Subtle Grid Background (darker shade)
    ctx.fillStyle = '#020617'; // Almost black
    ctx.fillRect(2, 2, canvas.width - 4, canvas.height - 4);

    // Draw Food
    const fx = foodRef.current.x * CELL_SIZE;
    const fy = foodRef.current.y * CELL_SIZE;
    ctx.fillStyle = '#38bdf8'; // Light Blue
    ctx.beginPath();
    ctx.arc(fx + CELL_SIZE/2, fy + CELL_SIZE/2, CELL_SIZE/3, 0, Math.PI * 2);
    ctx.fill();
    
    // Glow effect for food
    ctx.shadowBlur = 8;
    ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw Snake
    snakeRef.current.forEach((segment, index) => {
        const isHead = index === 0;
        ctx.fillStyle = isHead ? '#3b82f6' : '#1e40af'; // Blue-500 head, Blue-800 body
        
        const x = segment.x * CELL_SIZE;
        const y = segment.y * CELL_SIZE;
        const pad = 2;
        
        ctx.beginPath();
        ctx.roundRect(x + pad, y + pad, CELL_SIZE - pad*2, CELL_SIZE - pad*2, 4);
        ctx.fill();
    });
  };

  const spawnFood = () => {
    let newFood;
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loop if grid is full
    
    while (attempts < maxAttempts) {
        newFood = {
            x: Math.floor(Math.random() * GRID_WIDTH),
            y: Math.floor(Math.random() * GRID_HEIGHT)
        };
        const onSnake = snakeRef.current.some(s => s.x === newFood.x && s.y === newFood.y);
        if (!onSnake) break;
        attempts++;
    }
    if (newFood) {
        foodRef.current = newFood;
    }
  };

  const stopGame = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    playSound('die');
    setGameState('GAME_OVER');
    
    // Use ref to get the current score because state might be stale in closure
    if (scoreRef.current > highScore) {
        setHighScore(scoreRef.current);
    }
  };

  const gameLoop = () => {
    directionRef.current = nextDirectionRef.current;
    const head = snakeRef.current[0];
    const newHead = { 
        x: head.x + directionRef.current.x, 
        y: head.y + directionRef.current.y 
    };

    // Collision Check
    if (
        newHead.x < 0 || 
        newHead.x >= GRID_WIDTH || 
        newHead.y < 0 || 
        newHead.y >= GRID_HEIGHT ||
        snakeRef.current.some(s => s.x === newHead.x && s.y === newHead.y)
    ) {
        stopGame();
        return;
    }

    const newSnake = [newHead, ...snakeRef.current];
    
    // Eat Food
    if (newHead.x === foodRef.current.x && newHead.y === foodRef.current.y) {
        playSound('eat');
        // Update snake ref FIRST so spawnFood sees the snake occupying the new head position
        snakeRef.current = newSnake;
        
        // Update score
        const newScore = scoreRef.current + 10;
        scoreRef.current = newScore;
        setScore(newScore);
        
        // Spawn food after snake has moved/grown
        spawnFood();
    } else {
        newSnake.pop();
        snakeRef.current = newSnake;
    }

    drawGame();
  };

  const startGame = () => {
    initAudio(); // Ensure audio context is ready (user gesture required by some browsers)
    
    snakeRef.current = [
      { x: Math.floor(GRID_WIDTH/2), y: Math.floor(GRID_HEIGHT/2) },
      { x: Math.floor(GRID_WIDTH/2), y: Math.floor(GRID_HEIGHT/2) + 1 }
    ];
    directionRef.current = { x: 0, y: -1 };
    nextDirectionRef.current = { x: 0, y: -1 };
    spawnFood();
    
    // Reset scores
    scoreRef.current = 0;
    setScore(0);
    setGameState('PLAYING');
    
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    gameLoopRef.current = window.setInterval(gameLoop, INITIAL_SPEED);
    
    // Immediate draw
    drawGame();
  };

  // Keyboard Controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
        if (gameState !== 'PLAYING') return;
        
        const key = e.key;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
            e.preventDefault();
        }

        const current = directionRef.current;
        
        if (key === 'ArrowUp' && current.y === 0) nextDirectionRef.current = { x: 0, y: -1 };
        if (key === 'ArrowDown' && current.y === 0) nextDirectionRef.current = { x: 0, y: 1 };
        if (key === 'ArrowLeft' && current.x === 0) nextDirectionRef.current = { x: -1, y: 0 };
        if (key === 'ArrowRight' && current.x === 0) nextDirectionRef.current = { x: 1, y: 0 };
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gameState]);

  // Initial Draw
  useEffect(() => {
    drawGame();
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
      if (audioContextRef.current) {
          audioContextRef.current.close();
      }
    };
  }, []);

  // Redraw when game state changes to ensure overlays appear correctly over the canvas
  useEffect(() => {
    drawGame();
  }, [gameState]);

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 scroll-mt-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-navy-900 rounded-3xl overflow-hidden shadow-xl p-8 md:p-12 text-center relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
                <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    I'm always interested in discussing neuroscience, research opportunities, open science, or just to say hi! 
                    Feel free to reach out directly.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12">
                    <a 
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="flex flex-col items-center group"
                    >
                        <div className="w-16 h-16 bg-navy-800 rounded-2xl flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg border border-navy-700 ring-1 ring-white/5">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </div>
                        <span className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Email</span>
                        <span className="text-white font-medium group-hover:text-blue-300 transition-colors">{SOCIAL_LINKS.email}</span>
                    </a>

                    <a 
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                    >
                         <div className="w-16 h-16 bg-navy-800 rounded-2xl flex items-center justify-center text-blue-400 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg border border-navy-700 ring-1 ring-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </div>
                        <span className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">LinkedIn</span>
                        <span className="text-white font-medium group-hover:text-blue-300 transition-colors">View Profile</span>
                    </a>
                </div>

                {/* Snake Game Section */}
                <div className="mt-8 pt-8 border-t border-navy-800 w-full flex flex-col items-center">
                    <div className="flex justify-between items-center w-full max-w-[320px] mb-4 text-sm">
                         <span className="text-slate-400 font-medium">Use Arrows to Play</span>
                         <div className="text-blue-400 font-bold">
                            Score: <span className="text-white">{score}</span>
                            {(highScore > 0 || score > 0) && <span className="text-slate-500 ml-2 text-xs">Best: {Math.max(highScore, score)}</span>}
                         </div>
                    </div>
                    
                    <div className="relative group rounded-xl overflow-hidden shadow-2xl ring-4 ring-navy-800/50">
                        <canvas 
                            ref={canvasRef}
                            width={GRID_WIDTH * CELL_SIZE}
                            height={GRID_HEIGHT * CELL_SIZE}
                            className="block bg-slate-950 cursor-pointer"
                        />
                        
                        {/* Overlay for Game States */}
                        {gameState !== 'PLAYING' && (
                            <div className="absolute inset-0 bg-navy-900/90 backdrop-blur-sm flex flex-col items-center justify-center z-10 px-4">
                                {gameState === 'GAME_OVER' && (
                                    <div className="text-center mb-5">
                                        <p className="text-red-400 font-bold text-xl mb-2">Oh no :(</p>
                                        <p className="text-slate-300 text-sm mb-1">That was fun - you should reach out!</p>
                                        <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-blue-400 font-medium text-sm hover:text-blue-300 transition-colors">
                                            {SOCIAL_LINKS.email}
                                        </a>
                                        <p className="text-slate-500 text-xs mt-3">Final Score: {score}</p>
                                    </div>
                                )}
                                <button 
                                    onClick={startGame}
                                    className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                                >
                                    {gameState === 'IDLE' ? 'Play Snake' : 'Play Again'}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-slate-500 text-sm">Based in Toronto / Hamilton, Ontario</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};