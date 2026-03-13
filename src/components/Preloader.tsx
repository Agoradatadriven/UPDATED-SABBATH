import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const duration = 2500; // 2.5 seconds
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = '';
        }, 600); // Wait a bit before hiding
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-accent flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-12 w-full max-w-md px-6">
            <motion.div 
              className="text-center flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <img 
                src="https://wsrv.nl/?url=lh3.googleusercontent.com/d/1gfXg9c4sn8yP_7saRw180rWQ7G7PMvEx&output=webp" 
                alt="Sabbath Spa & Wellness Hub Logo" 
                className="w-48 md:w-64 h-auto object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://lh3.googleusercontent.com/d/1gfXg9c4sn8yP_7saRw180rWQ7G7PMvEx";
                }}
              />
            </motion.div>
            
            <motion.div 
              className="w-full flex flex-col items-center gap-4"
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
            >
              <motion.div 
                className="w-full h-[1px] bg-primary/20 relative overflow-hidden"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div 
                  className="absolute top-0 left-0 bottom-0 bg-primary"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
