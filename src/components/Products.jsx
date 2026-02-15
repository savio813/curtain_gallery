import { motion } from "framer-motion";
import products from "../data/products";

export default function Products() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-8">
      {products.map((item) => (
        <motion.div
          whileHover={{ y: -6 }}
          key={item.id}
          className="group shadow-xl rounded-2xl p-4 bg-white hover:shadow-2xl transition"
        >
          {/* IMAGE CONTAINER */}
          <div className="relative h-56 w-full overflow-hidden rounded-xl">

            {/* 🔵 Blurred Background */}
            <img
              src={item.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
            />

            {/* 🔵 Main Image */}
            <img
              src={item.img}
              alt={item.name}
              className="relative w-full h-full object-contain p-4 transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* DETAILS */}
          <h2 className="font-semibold mt-3">{item.name}</h2>

          <a
            href={`https://wa.me/918089498483?text=I am interested in ${item.name}`}
            className="inline-block mt-2 text-sm font-medium text-green-600 hover:underline"
          >
            Enquire on WhatsApp
          </a>
        </motion.div>
      ))}
    </div>
  );
}
