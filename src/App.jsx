import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
  },
  {
    id: 2,
    name: "Phone",
    price: 500,
  },
  {
    id: 3,
    name: "Camera",
    price: 700,
  },
];

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            border: "1px solid gray",
            padding: "20px",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>

          <button>Buy Now</button>
        </motion.div>
      ))}
    </div>
  );
};

export default App;
