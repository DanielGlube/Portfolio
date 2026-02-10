import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 scroll-mt-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl relative overflow-hidden transition-colors duration-300">
               <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full blur-xl opacity-60"></div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 relative z-10 transition-colors duration-300">Education</h3>
               
               <div className="relative z-10">
                 {/* Item 1: McMaster */}
                 <div className="relative pl-8 pb-12 border-l-2 border-slate-300 dark:border-slate-600 ml-3 transition-colors duration-300">
                    {/* Top Ball */}
                    <div className="absolute -left-[7px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-100 dark:ring-slate-700"></div>
                    
                    <div className="-mt-1.5">
                       <h4 className="font-semibold text-slate-800 dark:text-slate-100 leading-tight transition-colors duration-300">McMaster University</h4>
                       <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 transition-colors duration-300">Honours Bachelor of Science - HBSc</p>
                       <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Sept 2023 - April 2027</p>
                    </div>
                 </div>

                 {/* Item 2: TanenbaumCHAT */}
                 <div className="relative pl-8 ml-3">
                    {/* Bottom Ball */}
                    <div className="absolute -left-[7px] top-0 w-4 h-4 rounded-full bg-slate-400 ring-4 ring-slate-100 dark:ring-slate-700"></div>
                    
                    <div className="-mt-1.5">
                       <h4 className="font-semibold text-slate-800 dark:text-slate-100 leading-tight transition-colors duration-300">TanenbaumCHAT</h4>
                       <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">2019 - 2023</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">About Me</h2>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-loose transition-colors duration-300">
              <p className="mb-4">
                Hi! My name is Daniel Glube and I am a McMaster Level III Life Science Student interested in healthcare and neuroscience.
              </p>
              <p>
                My academic focus on Sensory Motor Systems allows me to explore the biology of how we perceive and interact with the world. However, my interest extends beyond just the mechanics of the brain; I am committed to advancing ethical healthcare practices. Open Science is an approach to research that promotes transparency, accessibility, and collaboration. Through this lens, I aim to make scientific research more inclusive and patient-centered. My goal is to bridge the gap between complex neural mechanisms and ethical data use to improve patient care.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 transition-colors duration-300">
               <div>
                 <span className="block text-3xl font-bold text-blue-600">3+</span>
                 <span className="text-sm text-slate-500 dark:text-slate-400">Years Experience</span>
               </div>
               <div>
                 <span className="block text-3xl font-bold text-blue-600">1</span>
                 <span className="text-sm text-slate-500 dark:text-slate-400">Key Publication</span>
               </div>
               <div>
                 <span className="block text-3xl font-bold text-blue-600">5+</span>
                 <span className="text-sm text-slate-500 dark:text-slate-400">Certifications</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};