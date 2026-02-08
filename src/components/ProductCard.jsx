import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-64 w-full overflow-hidden">

        {/* 🔵 Blurred Background */}
        <img
          src={product.img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
        />

        {/* 🔵 Main Image */}
        <img
          src={product.img}
          alt={product.name}
          className="relative w-full h-full object-contain p-4"
        />
      </div>

      {/* DETAILS */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
      </div>
    </motion.div>
  );
}
