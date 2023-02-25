// import Product from "./components/Product/Product";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  return (
    <div id="app" className="container">
      {/* <Product title="Computer 1" />
      <Product title="Laptop 4" />
      <Product title="Book 8" /> */}
      <ProductList />
    </div>
  );
};

export default App;
