import { useState, useEffect } from "react";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      let response = await fetch("http://localhost:8000/products");
      let data = await response.json();
      setProducts(data);
    };
    sendRequest();
  }, []);
  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8000/products/${id}`, {
      method: "DELETE",
    });
    setProducts(products.filter((item) => item.id !== id));
  };
  const addProduct = async (title) => {
    let response = await fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: title }),
    });
    let newProduct = await response.json();
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
