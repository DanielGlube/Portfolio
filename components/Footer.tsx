import React from 'react';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Daniel Glube. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
           <a 
             href="#home" 
             onClick={(e) => handleScroll(e, '#home')}
             className="text-sm hover:text-white transition-colors cursor-pointer"
           >
             Home
           </a>
           <a 
             href="#about" 
             onClick={(e) => handleScroll(e, '#about')}
             className="text-sm hover:text-white transition-colors cursor-pointer"
           >
             About Me
           </a>
           <a 
             href="#contact" 
             onClick={(e) => handleScroll(e, '#contact')}
             className="text-sm hover:text-white transition-colors cursor-pointer"
           >
             Contact
           </a>
        </div>
      </div>
    </footer>
  );
};