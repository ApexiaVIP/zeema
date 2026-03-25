import { motion } from "framer-motion";

const partnerCategories = [
  {
    title: "Team Partners",
    names: ["TF Sport", "FIA WEC Teams", "GT Championship Teams"],
  },
  {
    title: "Technical Partners",
    names: ["Milltek Exhaust Systems", "Rotiform Wheels"],
  },
  {
    title: "Championship Experience",
    names: [
      "FIA World Endurance Championship",
      "Le Mans 24 Hours",
      "British Touring Car Championship",
      "European & American Le Mans Series",
      "FIA European, British & Belgian GT",
      "Australian GTP",
    ],
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="section-subheading mb-4">Collaborations</p>
          <h2 className="section-heading">Partners & Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border rounded-sm p-8"
            >
              <div className="accent-line mb-6" />
              <h3 className="font-display text-xl font-semibold tracking-wider text-bright mb-6">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.names.map((name) => (
                  <li
                    key={name}
                    className="font-body text-sm text-silver flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
