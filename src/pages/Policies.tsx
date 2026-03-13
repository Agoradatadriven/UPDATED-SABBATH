import React from 'react';
import { motion } from 'motion/react';

const policies = [
  {
    title: "Respectful Conduct is Required",
    details: [
      "Sabbath Wellness maintains the right to refuse or discontinue service to any guest exhibiting inappropriate behavior.",
      "Harassment, suggestive language, or disrespectful conduct will not be tolerated under any circumstance."
    ]
  },
  {
    title: "Private Suite Etiquette",
    details: [
      "Keep conversations low and respectful to maintain a calm environment for all guests.",
      "Use of inappropriate words or loud behavior inside the private rooms is strictly prohibited.",
      "Let us honor each other's quiet time during your wellness journey."
    ]
  },
  {
    title: "No Smoking, Vaping, or Alcohol",
    details: [
      "For your health and that of others, smoking, vaping, and consumption of alcoholic beverages are strictly prohibited within all areas of Sabbath Wellness & Spa Hub."
    ]
  }
];

export default function Policies() {
  return (
    <div className="relative w-full bg-accent text-primary font-sans selection:bg-primary selection:text-accent min-h-screen pt-32 md:pt-48 pb-32">
      
      {/* Hero Section */}
      <div className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24 text-center flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] md:text-[12px] tracking-[0.2em] uppercase font-medium opacity-60 mb-6"
        >
          Guidelines & Etiquette
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-[72px] leading-[1.1] font-light tracking-[-0.02em] max-w-4xl mx-auto"
        >
          Important Reminders & Spa Policies
        </motion.h1>
      </div>

      {/* Image Break */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 mb-20 md:mb-32"
      >
        <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-sm shadow-2xl relative group">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000" 
            alt="Spa ambiance" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-0" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          className="text-lg md:text-2xl font-light leading-relaxed text-center mb-20 md:mb-32 opacity-90"
        >
          To preserve the peace, safety, and sanctity of our wellness space, please take note of the following policies:
        </motion.p>

        <div className="flex flex-col gap-16 md:gap-24">
          {policies.map((policy, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              {/* Large Background Number */}
              <div className="absolute -left-4 md:-left-16 top-[-20px] md:top-[-40px] text-primary/5 font-serif text-8xl md:text-[160px] font-light leading-none select-none pointer-events-none">
                0{index + 1}
              </div>
              
              <div className="relative z-10 pl-6 md:pl-12 border-l border-primary/20">
                <h2 className="font-serif text-2xl md:text-4xl font-light mb-8 text-[#C58F3B]">
                  {policy.title}
                </h2>
                <ul className="flex flex-col gap-6 md:gap-8">
                  {policy.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-4 md:gap-6 group">
                      <div className="mt-2.5 md:mt-3 shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-primary/20 group-hover:border-[#C58F3B] transition-colors duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-[#C58F3B] transition-colors duration-500" />
                      </div>
                      <p className="text-base md:text-lg lg:text-xl font-light leading-[1.8] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
