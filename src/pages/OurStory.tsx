import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

// Reusable Parallax Image Component
const ParallaxImage = ({ src, alt, className, speed = 0.2 }: { src: string, alt: string, className?: string, speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img 
        src={src} 
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y, scale: 1 + speed }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default function OurStory() {
  const scrollSpringConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Hero Zoom Out
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: rawHeroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroProgress = useSpring(rawHeroProgress, scrollSpringConfig);
  const heroScale = useTransform(heroProgress, [0, 1], [1.1, 1]);
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "20%"]);

  // Horizontal Scroll Section
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: rawHorizontalProgress } = useScroll({ target: horizontalRef, offset: ["start start", "end start"] });
  const horizontalProgress = useSpring(rawHorizontalProgress, scrollSpringConfig);
  const xTransform = useTransform(horizontalProgress, [0, 1], ["0%", "-75%"]);

  const textRevealVariants = {
    initial: { y: "110%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="relative w-full bg-accent text-primary font-sans selection:bg-primary selection:text-accent">
      
      {/* SECTION 1: HERO */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-accent">
        <motion.div 
          className="absolute inset-0 w-full h-full origin-center"
          style={{ scale: heroScale, y: heroY }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
            alt="Sabbath Spa Exterior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/30"></div>
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-16 flex flex-col gap-4 z-10">
          <h1 className="font-serif text-[100px] md:text-[140px] lg:text-[180px] leading-[0.8] tracking-[-0.02em] font-light text-accent drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-[10px] md:text-[12px] tracking-[0.2em] uppercase font-medium text-accent/90 ml-2 drop-shadow-md">
            Wellness and Nature Intertwined
          </p>
        </div>
      </section>

      {/* SECTION 2: SPLIT LAYOUT */}
      <section className="relative w-full py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-primary text-accent">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start max-w-[1800px] mx-auto">
          <div className="w-full md:w-1/2">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200" 
              alt="Spa Interior" 
              className="w-full aspect-[3/4] md:aspect-[4/5] rounded-sm"
              speed={0.15}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-12 md:gap-16 pt-10 md:pt-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.3] font-light"
            >
              A sanctuary of grace that features exclusive wellness suites: private massage rooms, townhouses with patios, and penthouses with terraces.
            </motion.h2>
            
            <div className="flex flex-col gap-12">
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[16px] md:text-[18px] leading-[1.6] font-light opacity-80 max-w-md"
              >
                Natural finishings, calming aesthetics, ultramodern therapies, your own private wellness center with pool and spa — all in one serene location next to a park.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-sm aspect-[4/3]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" 
                  alt="Spa Amenities" 
                  className="w-full h-full object-cover rounded-sm"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>      {/* SECTION 3: SPLIT LAYOUT - IMAGE LEFT */}
      <section className="relative w-full py-24 md:py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200" 
              alt="Transparent Masterpiece" 
              className="w-full aspect-[4/5] rounded-sm"
              speed={0.15}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.2] font-light"
            >
              Sabbath is a tranquil masterpiece, elegantly woven into the park and urban landscape.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[16px] md:text-[18px] leading-[1.6] font-light opacity-80 max-w-md"
            >
              Every architectural detail has been thoughtfully designed to harmonize with nature, creating a seamless transition between the vibrant city and our peaceful sanctuary.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 4: SPLIT LAYOUT - IMAGE RIGHT */}
      <section className="relative w-full py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-primary text-accent">
        <div className="flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-center max-w-[1800px] mx-auto">
          <div className="w-full md:w-1/2">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
              alt="Sophisticated Complex" 
              className="w-full aspect-[4/5] rounded-sm"
              speed={0.15}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.2] font-light"
            >
              Elevating guests above the ordinary.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[16px] md:text-[18px] leading-[1.6] font-light opacity-80 max-w-md"
            >
              Our sophisticated wellness complex offers breathtaking panoramic views of the sanctuary, delivering unparalleled premium-class comfort and rejuvenation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 5: SPLIT LAYOUT - IMAGE LEFT */}
      <section className="relative w-full py-24 md:py-40 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200" 
              alt="Nature Interior" 
              className="w-full aspect-[4/5] rounded-sm"
              speed={0.15}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.2] font-light"
            >
              Nature becomes your life's interior.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[16px] md:text-[18px] leading-[1.6] font-light opacity-80 max-w-md"
            >
              Immerse yourself in a green belt of parks, surrounding landscaped gardens, plant decor of the suites, and ivy-draped private patios.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 6: HORIZONTAL SCROLL */}
      <section ref={horizontalRef} className="relative w-full h-[400vh] bg-primary text-accent">
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center">
          <motion.div 
            className="flex h-full w-[400vw] will-change-transform"
            style={{ x: xTransform }}
          >
            {/* Slide 1 */}
            <div className="relative w-screen h-full flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000" alt="Nature" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-12 right-12 bg-primary text-accent p-8 md:p-10 flex items-center gap-10 md:gap-16 shadow-2xl">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.2]">Inspiring<br/>Nature park</p>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl md:text-2xl font-light">+</span>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="relative w-screen h-full flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" alt="Pool" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-12 right-12 bg-primary text-accent p-8 md:p-10 flex items-center gap-10 md:gap-16 shadow-2xl">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.2]">Beautifying<br/>Wellness Center</p>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl md:text-2xl font-light">+</span>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="relative w-screen h-full flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000" alt="Terrace" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-12 right-12 bg-primary text-accent p-8 md:p-10 flex items-center gap-10 md:gap-16 shadow-2xl">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.2]">Impressive<br/>Outdoor Terraces</p>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl md:text-2xl font-light">+</span>
                </div>
              </div>
            </div>
            {/* Slide 4 */}
            <div className="relative w-screen h-full flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" alt="Architecture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-12 right-12 bg-primary text-accent p-8 md:p-10 flex items-center gap-10 md:gap-16 shadow-2xl">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.2]">Striking<br/>Serene Architecture</p>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl md:text-2xl font-light">+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: OUTRO */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-20 flex flex-col items-center text-center max-w-[1800px] mx-auto bg-accent text-primary">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="text-[10px] md:text-[12px] tracking-[0.2em] uppercase font-medium opacity-60 mb-8"
        >
          ALL SHADES OF TRANQUILITY
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-[80px] leading-[1.1] font-light mb-20"
        >
          A unique sanctuary of grace
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=2400" 
            alt="Sabbath Sanctuary" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

    </div>
  );
}
