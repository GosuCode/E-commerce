const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="bg-background border-slate-200 hover:border-slate-500 border-2 grid place-items-center rounded-lg">
      <div className="bg-background w-4/5 rounded-md">
        <img src={productImage} alt={productImage} className="w-full" />
      </div>
      <div className="text-center font-bold px-4 py-2 border-t-2 w-full">
        <h1>{productName}</h1>
        <p>${price}</p>
      </div>
      <button className="py-2 px-4 border-2 border-slate-700 rounded-lg my-4">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
