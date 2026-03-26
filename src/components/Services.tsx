import { motion } from "framer-motion";
import motorsportImg from "@/assets/motorsport.jpg";
import amrImg from "@/assets/amr_1.jpg";
import valkyrieImg from "@/assets/valkyrie_1.jpg";
import vetteImg from "@/assets/vette_1.jpg";

const services = [
  {
    title: "Motorsport Solutions",
    description:
      "Administrative, logistical and managerial solutions for racing teams competing in FIA WEC, Le Mans 24hr, European Le Mans and IMSA.",
    image: motorsportImg,
  },
  {
    title: "Motorsport Equipment",
    description:
      "Bespoke motorsport equipment built to order such as lighting systems, fuel timers, data stations and much more.",
    images: [amrImg, valkyrieImg, vetteImg],
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
              {"image" in service ? (
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
              ) : (
                <div className="aspect-[4/3] overflow-hidden grid grid-cols-3 gap-0.5">
                  {service.images!.map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden">
                      <img
                        src={img}
                        alt={`${service.title} ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  ))}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, hsla(220, 20%, 6%, 0.95) 0%, hsla(220, 20%, 6%, 0.3) 60%)",
                    }}
                  />
                </div>
              )}
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
