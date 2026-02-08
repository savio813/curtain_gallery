import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Collection
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}

      </div>

    </div>
  );
}
