import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((item) => {
        return <Product title={item.title} key={item.id} />;
      })}
    </div>
  );
};

export default ProductList;
