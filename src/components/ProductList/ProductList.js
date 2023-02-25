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
    <div>
      {products.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
};

export default ProductList;
