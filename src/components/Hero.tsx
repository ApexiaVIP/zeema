import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-racing.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="GT racing car on track at golden hour"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsla(220, 20%, 6%, 0.88) 0%, hsla(220, 20%, 6%, 0.45) 60%, hsla(220, 20%, 6%, 0.75) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="section-subheading mb-6">Motorsport Consultancy Since 2004</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.1em] text-bright mb-6">
            ZEEMA
          </h1>
          <div className="flex justify-center mb-8">
            <div className="accent-line" />
          </div>
          <p className="font-body text-lg md:text-xl text-silver max-w-2xl mx-auto leading-relaxed">
            Elite technical and strategic consultancy for motor racing teams across the globe.
            From pit lane to podium — precision, performance, excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <a href="#services" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="font-condensed text-xs tracking-[0.3em] uppercase">Explore</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
