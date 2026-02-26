import { motion, useScroll, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Wand2,
  Video,
  MousePointerClick,
  FolderOpenDot,
  Gauge,
  MonitorPlay,
} from "lucide-react";

const features = [
  {
    name: "Screen Recorder",
    heading: "pixel-perfect captures.",
    description: "Built-in native screen recording capturing crisp details up to 50 Mbps in MP4, MKV, or WebM.",
    icon: Video,
  },
  {
    name: "Linear Video Editor",
    heading: "seamless workflows.",
    description: "Every project is a folder. Open it, and your video is instantly imported onto a single, snappy timeline.",
    icon: FolderOpenDot,
  },
  {
    name: "Magic Regions",
    heading: "effortless tracking.",
    description: "Drag, drop, and resize UI for cuts and zooms. Click once to make the region flawlessly track your cursor.",
    icon: MousePointerClick,
  },
  {
    name: "3-Click Demos",
    heading: "cinematic motion.",
    description: "Say goodbye to complex keyframes. Create stunning cinematics, zooms, and panning effects with just three clicks.",
    icon: Wand2,
  },
  {
    name: "Lossless Export",
    heading: "stunning fidelity.",
    description: "Export your final masterpiece at up to 4K 60fps. Ready to share on the web with stunning fidelity.",
    icon: Gauge,
  },
  {
    name: "Custom Backgrounds",
    heading: "brand identity.",
    description: "Wrap your video in solid colors, premium built-in patterns, or bring any custom JSX element from patterncraft.fun.",
    icon: MonitorPlay,
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Convert scrollYProgress into a discrete index
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Calculate which feature we should be looking at based on scroll position
      const totalFeatures = features.length;
      const index = Math.min(
        Math.max(Math.floor(latest * totalFeatures), 0),
        totalFeatures - 1
      );
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  const activeFeature = features[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    <section 
      id="features" 
      ref={containerRef}
      className="relative bg-background"
      style={{ height: `${features.length * 60}vh` }}
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center p-6 lg:p-12 z-10 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none" />
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 pointer-events-auto">
          
          {/* Left Side: Header & Context */}
          <div className="w-full md:w-5/12 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 cursor-default"
            >
              <span className="text-sm font-medium tracking-wide inter-semibold uppercase">Powerful Features</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground instrument-serif-regular mb-6"
            >
              Everything you need,<br />
              <div className="relative h-[1.2em] overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={activeFeature.heading}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 text-primary italic cursor-target"
                  >
                    {activeFeature.heading}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-muted-foreground inter-regular"
            >
              Scroll to explore how Recso combines a powerful screen recorder with an intuitive timeline editor.
            </motion.p>
          </div>

          {/* Right Side: Interactive Feature Display */}
          <div className="w-full md:w-6/12 relative h-[500px]">
            {/* Main Interactive Display Box */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-primary/5 border border-primary/10 shadow-2xl backdrop-blur-3xl overflow-hidden flex flex-col p-10 lg:p-14">
              
              {/* Progress Bar Header */}
              <div className="w-11/12 mx-auto flex gap-1 mb-10">
                {features.map((_, idx) => (
                  <div key={idx} className="h-[2px] flex-1 rounded-full bg-foreground/10 overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: idx < activeIndex ? "100%" : idx === activeIndex ? "100%" : "0%"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                ))}
              </div>

              {/* Dynamic Content with Smooth Cross-fades */}
              <div className="flex-1 flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature.name}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 flex flex-col justify-center pointer-events-auto z-10"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 mb-8 overflow-hidden shadow-lg shadow-primary/20">
                      <motion.div
                        animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <ActiveIcon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                      </motion.div>
                    </div>
                    <h3 className="text-4xl font-medium text-foreground instrument-serif-regular mb-4">
                      {activeFeature.name}
                    </h3>
                    <p className="text-xl leading-relaxed text-muted-foreground inter-regular max-w-md">
                      {activeFeature.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Decorative background blurs behind the card */}
            <motion.div 
              animate={{ 
                rotate: activeIndex * 45,
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10"
            />
          </div>
        </div>
      </div>
      
      {/* Scrollable Snap Targets mapped to each feature */}
      <div className="relative z-0 w-full pointer-events-none">
        {features.map((_, i) => (
          <div key={i} className="h-[60vh] w-full snap-center" />
        ))}
      </div>
    </section>
  );
}
