import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Lenis from 'lenis';

export default function GenericPage({ title, subtitle, image }: { title: string, subtitle: string, image?: string }) {
  return (
    <div className="relative w-full min-h-screen bg-accent text-primary font-sans selection:bg-primary selection:text-accent pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[90px] leading-[1.05] font-light mb-6">
            {title}
          </h1>
          <p className="text-[14px] md:text-[16px] leading-[1.6] font-light tracking-wide opacity-70 max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="w-full aspect-video md:aspect-[21/9] bg-primary/5 rounded-sm overflow-hidden relative mb-20"
        >
          <img 
            src={image || "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1600"} 
            alt={title} 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="font-serif text-3xl font-light mb-8">Discover the essence</h2>
            <p className="text-[15px] font-light leading-[1.8] opacity-80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-[15px] font-light leading-[1.8] opacity-80">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="bg-primary/5 p-10 rounded-sm flex flex-col justify-center">
            <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium opacity-60 mb-6">Experience</h3>
            <p className="font-serif text-2xl font-light leading-[1.4] mb-8">
              "A sanctuary where time slows down and every moment is dedicated to your well-being."
            </p>
            <button className="w-fit text-[10px] tracking-[0.2em] uppercase font-medium border-b border-primary/40 pb-1 hover:border-primary transition-colors">
              Book a session
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
