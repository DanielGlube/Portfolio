import React from 'react';
import { PUBLICATIONS } from '../constants.ts';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-navy-900 text-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Publications</h2>
            <p className="text-slate-400 max-w-xl">
              Highlights from my research in neuroscience and open science practices.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PUBLICATIONS.map((pub, index) => (
            <a 
              key={index} 
              href={pub.link || '#'}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-navy-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-400 text-xs font-semibold rounded uppercase tracking-wider">
                  {pub.role}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-blue-400 transition-colors">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <h3 className="text-xl text-white leading-relaxed group-hover:text-blue-300 transition-colors flex-grow">
                  {pub.title}
                </h3>
                {pub.image && (
                   <img 
                     src={pub.image} 
                     alt={pub.title} 
                     className="w-16 h-16 object-cover rounded-lg shadow-md border border-slate-700 flex-shrink-0 mt-1" 
                   />
                )}
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                {pub.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};