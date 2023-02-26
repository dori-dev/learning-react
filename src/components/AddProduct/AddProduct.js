import { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    if (title) {
      onAdd(title);
      setTitle("");
    }
  };
  return (
    <div>
      <form className="add-product-form" onSubmit={submitForm}>
        <div className="form-control">
          <input
            type="text"
            name="product-name"
            placeholder="Product name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="form-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
