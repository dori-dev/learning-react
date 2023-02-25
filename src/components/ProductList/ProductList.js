import Product from "../Product/Product";
import "./ProductList.css";

const products = [
  {
    id: 1,
    title: "Book",
  },
  {
    id: 2,
    title: "Laptop",
  },
  {
    id: 3,
    title: "TShirt",
  },
  {
    id: 4,
    title: "Computer",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((item) => {
        return <Product title={item.title} key={item.id} />;
      })}
    </div>
  );
};

export default ProductList;
