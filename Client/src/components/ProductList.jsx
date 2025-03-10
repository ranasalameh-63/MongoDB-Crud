import React from "react";
import { deleteProduct, softDeleteProduct, updateProduct } from "../api";

const ProductList = ({ products, refresh }) => {
  const handleDelete = async (id) => {
    await deleteProduct(id);
    refresh();
  };

  const handleSoftDelete = async (id) => {
    await softDeleteProduct(id);
    refresh();
  };

  const handleUpdate = async (id) => {
    const newName = prompt("Enter new product name:");
    const newPrice = prompt("Enter new product price:");
    if (newName && newPrice) {
      await updateProduct(id, { name: newName, price: Number(newPrice) });
      refresh();
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? <p>No products found.</p> : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - ${product.price}
              <button onClick={() => handleUpdate(product._id)}>Edit</button>
              <button onClick={() => handleDelete(product._id)}>Delete</button>
              <button onClick={() => handleSoftDelete(product._id)}>Soft Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
