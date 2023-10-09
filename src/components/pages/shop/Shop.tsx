import { PRODUCTS } from "@src/products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5 px-4 py-2 md:px-16 md:py-10">
      {PRODUCTS.map((product) => {
        return <Product data={product} />;
      })}
    </div>
  );
};

export default Shop;
