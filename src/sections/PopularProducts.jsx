import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flSex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          {" "}
          <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Discover the perfect blend of quality and style with our exclusive
          collections. Explore a world crafted for comfort, elegance, and
          exceptional value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-44 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
