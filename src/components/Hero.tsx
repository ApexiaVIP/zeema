import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-racing.jpg";
import zeemaLogo from "@/assets/zeema-logo.png";

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
          <img src={zeemaLogo} alt="Zeema" className="h-24 md:h-32 lg:h-40 mx-auto mb-6" />
          <div className="flex justify-center mb-8">
            <div className="accent-line" />
          </div>
          <p className="font-condensed text-sm md:text-base tracking-[0.25em] uppercase text-silver">
            Motorsport Solutions Since 2004
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
