import { motion } from "framer-motion";
import heritagePattern from "@/assets/heritage-pattern.jpg";

const WhyMaxana = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heritagePattern}
          alt="Mithila heritage pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              Our Heritage
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Why Choose JSV International?
            </h2>
            <div className="divider-gold mb-8" />

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Born in the ancient lands of Mithila, where lotus seeds have been
                cultivated for centuries, JSV International brings you the purest form of
                this remarkable superfood.
              </p>
              <p className="leading-relaxed">
                Each makhana is hand-picked from pristine waters, carefully
                roasted to perfection, and seasoned with premium spices to create
                snacks that are as delicious as they are nutritious.
              </p>
              <p className="leading-relaxed">
                We honor our heritage while embracing innovation, creating products
                that meet the highest global standards of quality and taste.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10">
              {[
                { value: "100%", label: "Natural" },
                { value: "0", label: "Preservatives" },
                { value: "∞", label: "Possibilities" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                  <h4 className="font-heading text-lg mb-2">Ancient Wisdom</h4>
                  <p className="text-sm text-muted-foreground">
                    Rooted in centuries of Mithila tradition
                  </p>
                </div>
                <div className="bg-gold/10 rounded-lg p-6 border border-gold/20">
                  <h4 className="font-heading text-lg mb-2">Premium Quality</h4>
                  <p className="text-sm text-muted-foreground">
                    Every batch meets our exacting standards
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-sage rounded-lg p-6 border border-primary/10">
                  <h4 className="font-heading text-lg mb-2">Modern Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Contemporary flavors for global palates
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6 border border-border">
                  <h4 className="font-heading text-lg mb-2">Sustainable Sourcing</h4>
                  <p className="text-sm text-muted-foreground">
                    Supporting local farming communities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMaxana;
