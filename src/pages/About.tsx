import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import lotusPond from "@/assets/lotus-pond.jpg";
import heritagePattern from "@/assets/heritage-pattern.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={heritagePattern}
            alt="Heritage pattern background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              About JSV
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Our Story of Heritage & Wellness
            </h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              A journey from the ancient ponds of Mithila to becoming a global
              symbol of premium healthy snacking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={lotusPond}
                alt="Lotus pond in Mithila"
                className="rounded-lg shadow-elegant w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                The Beginning
              </p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">Our Story</h2>
              <div className="divider-gold mb-8" />
              <div className="space-y-6 text-muted-foreground">
                <p>
                  JSV International was born from a deep-rooted connection to the land of
                  Mithila, where lotus seeds—makhana—have been cultivated for
                  thousands of years. Our founders grew up watching artisans
                  harvest these precious seeds from pristine ponds, understanding
                  the care and expertise required to bring them from water to table.
                </p>
                <p>
                  We envisioned bringing this remarkable superfood to the world,
                  preserving traditional methods while innovating with contemporary
                  flavors that appeal to modern palates. Today, JSV International stands as a
                  bridge between ancient wisdom and modern wellness.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
              What We Believe
            </p>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Our Philosophy
            </h2>
            <div className="h-px w-16 bg-gold mx-auto mb-8" />
            <p className="text-lg text-background/70">
              We believe that wellness should never compromise on taste. Every
              JSV product embodies our commitment to purity, quality, and the
              rich heritage of Mithila.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Purity First",
                description:
                  "Every batch is crafted with 100% natural ingredients, free from preservatives and artificial additives.",
              },
              {
                title: "Heritage Honored",
                description:
                  "We work directly with local farmers, preserving traditional cultivation methods that have been perfected over centuries.",
              },
              {
                title: "Innovation Embraced",
                description:
                  "While respecting tradition, we continuously innovate to create flavors that delight modern taste preferences.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-8 border border-background/10 rounded-lg"
              >
                <h3 className="font-heading text-xl mb-4">{item.title}</h3>
                <p className="text-background/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-muted rounded-lg"
            >
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Our Mission
              </p>
              <h3 className="font-heading text-2xl mb-4">
                Nourishing Lives, Naturally
              </h3>
              <p className="text-muted-foreground">
                To provide the world with the purest, most delicious makhana
                snacks while supporting the livelihoods of Mithila's farming
                communities and preserving our cultural heritage for future
                generations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-primary/5 rounded-lg border border-primary/20"
            >
              <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
                Our Vision
              </p>
              <h3 className="font-heading text-2xl mb-4">
                A Global Superfood Movement
              </h3>
              <p className="text-muted-foreground">
                To establish JSV International as the world's leading premium makhana brand,
                making this ancient superfood a staple in health-conscious homes
                across every continent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
