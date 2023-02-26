import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Book" },
    { id: 2, title: "Laptop" },
    { id: 3, title: "TShirt" },
    { id: 4, title: "Computer" },
  ]);
  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };
  const addProduct = (title) => {
    let newProduct = {
      id: Math.max(...products.map((product) => product.id)) + 1,
      title: title,
    };
    setProducts([...products, newProduct]);
  };
  return (
    <div id="app" className="container">
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default App;
