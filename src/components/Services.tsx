import { motion } from "framer-motion";
import motorsportImg from "@/assets/motorsport.jpg";
import technicalImg from "@/assets/technical-support.jpg";
import vehicleDevImg from "@/assets/vehicle-dev.jpg";
import conciergeImg from "@/assets/concierge.jpg";

const services = [
  {
    title: "Motorsport Solutions",
    description:
      "Administrative, logistical and managerial solutions for racing teams competing in FIA WEC, Le Mans 24hr, European & American Le Mans Series, BTCC, and GT championships worldwide.",
    image: motorsportImg,
  },
  {
    title: "Technical Support",
    description:
      "Trackside and workshop-based technical support for racing programmes. Data analysis, setup consultation, and engineering solutions at the highest level of competition.",
    image: technicalImg,
  },
  {
    title: "Vehicle Developments",
    description:
      "Manufacturer vehicle homologation, bespoke builds and restoration commissions. From custom motorcycles to special vehicle projects, crafted with precision.",
    image: vehicleDevImg,
  },
  {
    title: "Automotive Concierge",
    description:
      "Bespoke private vehicle fleet management for discerning collectors. Maintenance, acquisition, storage, transport — every detail handled with discretion.",
    image: conciergeImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="section-subheading mb-4">What We Do</p>
          <h2 className="section-heading">Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-sm card-hover bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, hsla(220, 20%, 6%, 0.95) 0%, hsla(220, 20%, 6%, 0.2) 60%)",
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="accent-line mb-4" />
                <h3 className="font-display text-2xl font-semibold tracking-wider text-bright mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-silver leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
