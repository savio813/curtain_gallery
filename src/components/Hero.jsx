import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 text-center bg-gradient-to-r from-green-50 to-amber-50">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-[var(--primary)]"
      >
        Premium Curtains & Home Interiors
      </motion.h1>

      <p className="mt-6 text-gray-600 text-lg">
        Transform your home with elegance & comfort
      </p>

      <div className="flex gap-4 justify-center mt-8">
        <a
          href="https://wa.me/919999999999"
          className="bg-[var(--primary)] text-white px-6 py-3 rounded-2xl shadow-lg"
        >
          WhatsApp Enquiry
        </a>

        <a
          href="/products"
          className="border-2 border-[var(--primary)] px-6 py-3 rounded-2xl"
        >
          Browse Products
        </a>
      </div>
    </section>
  );
}
