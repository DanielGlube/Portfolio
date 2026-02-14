import React from 'react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 md:pt-20 md:pb-0 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      {/* Abstract Background Shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-100 dark:bg-slate-800 skew-x-12 translate-x-32 hidden lg:block transition-colors duration-300" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="max-w-3xl lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
              Daniel Glube
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-8 transition-colors duration-300">
              McMaster Life Science III — <span className="text-slate-900 dark:text-white font-medium">Sensory Motor Systems</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed transition-colors duration-300">
              Specializing in neuroscience and sensory motor systems. Interested in how we experience the world and how our brains adapt to those experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#portfolio"
                onClick={(e) => handleScroll(e, '#portfolio')}
                className="px-8 py-4 bg-navy-900 dark:bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors text-center cursor-pointer"
              >
                View Work
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-8 py-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md font-medium hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition-colors text-center cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-10 translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-navy-900 dark:bg-slate-700 rounded-3xl -rotate-3 opacity-5 -translate-x-2 -translate-y-2"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 bg-slate-200 dark:bg-slate-800 transition-colors duration-300">
                <img 
                  src="https://i.ibb.co/5XdVz5VD/Solo-Amazingness-Daniel-Glube.png" 
                  alt="Daniel Glube" 
                  className="w-full h-full object-cover object-[50%_25%]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};