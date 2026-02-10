import React, { useState } from 'react';
import { EXPERIENCES } from '../constants.ts';

export const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExperience = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 scroll-mt-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Professional Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
            My professional journey across research, teaching, and leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {EXPERIENCES.map((exp) => (
            <div 
              key={exp.id} 
              className={`bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden transition-all duration-300 border ${
                openId === exp.id 
                  ? 'border-blue-200 dark:border-blue-800 ring-1 ring-blue-100 dark:ring-blue-900' 
                  : 'border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <button
                onClick={() => toggleExperience(exp.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 flex-grow">
                   <div className="md:w-1/3">
                      <h3 className="font-bold text-slate-900 dark:text-white transition-colors duration-300">{exp.company}</h3>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">{exp.period}</p>
                   </div>
                   <div className="md:w-2/3">
                      <h4 className="text-slate-700 dark:text-slate-200 font-medium transition-colors duration-300">{exp.role}</h4>
                   </div>
                </div>
                <div className={`ml-4 transform transition-transform duration-300 text-slate-400 ${openId === exp.id ? 'rotate-180 text-blue-500' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openId === exp.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 pt-0 border-t border-slate-50 dark:border-slate-700">
                  <div className="mt-4">
                    {exp.location && (
                      <p className="text-sm text-slate-400 mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {exp.location}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {exp.description.map((point, idx) => (
                        <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};