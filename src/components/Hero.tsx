import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-32"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl text-white mb-6">
              Masterful Woodworking &<br />
              <span className="text-gold">Custom Cabinetry</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto">
              Crafting timeless, heirloom-quality woodwork from sustainable
              materials. Each piece tells a story of precision, passion, and
              unparalleled craftsmanship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              variant="primary"
              className="bg-gold hover:bg-gold/90 focus:ring-gold/50"
              icon={<ChevronRight size={16} />}
            >
              Explore Our Work
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Our Services
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex flex-col items-center"
            >
              <span className="text-white text-sm mb-2">Scroll Down</span>
              <div className="w-6 h-9 border-2 border-white rounded-full flex justify-center pt-1">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-1 h-1 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
