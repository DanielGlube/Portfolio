import React from 'react';
import { SKILL_CATEGORIES } from '../constants.ts';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 scroll-mt-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Skills & Certifications</h2>
          <div className="h-1 w-20 bg-blue-500 rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-100 dark:border-slate-700 hover:border-blue-100 dark:hover:border-blue-800 transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="inline-block px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-600 dark:text-slate-200 font-medium shadow-sm transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};