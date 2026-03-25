import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-4">Get In Touch</p>
          <h2 className="section-heading">Contact</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card border border-border rounded-sm p-10 space-y-8">
            <div className="text-center">
              <p className="font-body text-silver leading-relaxed">
                Whether you need trackside support, logistics solutions, or bespoke vehicle management —
                we'd love to discuss how Zeema can help.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:Chris@zeema.co.uk"
                className="flex items-center gap-4 text-silver hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-condensed text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</p>
                  <p className="font-body text-sm text-bright">Chris@zeema.co.uk</p>
                </div>
              </a>

              <a
                href="tel:+447966572051"
                className="flex items-center gap-4 text-silver hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-condensed text-xs tracking-[0.2em] uppercase text-muted-foreground">Phone</p>
                  <p className="font-body text-sm text-bright">+44 7966 572 051</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-condensed text-xs tracking-[0.2em] uppercase text-muted-foreground">Location</p>
                  <p className="font-body text-sm text-bright">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
