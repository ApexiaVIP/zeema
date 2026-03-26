import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "6", label: "Continents" },
  { value: "15+", label: "Championship Series" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-subheading mb-4">Who We Are</p>
            <h2 className="section-heading mb-8">About Zeema</h2>
            <div className="accent-line mb-8" />
            <div className="space-y-6 font-body text-base text-silver leading-relaxed">
              <p>
                Through the application of the principles of total commitment, quality and excellence,
                Zeema has established itself within the motorsport industry since its inception in 2004.
              </p>
              <p>
                Offering motorsport solutions, technical and administrative support, we bring over two
                decades of elite-level experience to every engagement.
              </p>
              <p>
                Our involvement spans the highest levels of motor racing around the globe, where precision,
                quality and time management are not optional.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="bg-card p-8 rounded-sm border border-border"
                >
                  <span className="font-display text-5xl font-bold text-primary">{stat.value}</span>
                  <p className="font-condensed text-sm tracking-[0.2em] uppercase text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
