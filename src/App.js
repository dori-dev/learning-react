import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  const [products, setProduct] = useState([
    { id: 1, title: "Book" },
    { id: 2, title: "Laptop" },
    { id: 3, title: "TShirt" },
    { id: 4, title: "Computer" },
  ]);
  return (
    <div id="app" className="container">
      <ProductList products={products} />
    </div>
  );
};

export default App;
