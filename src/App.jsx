import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 500,
  },
  {
    id: 3,
    name: "Headphones",
    price: 200,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 300,
  },
];

const App = () => {
  const [filterType, setFilterType] = useState("all");

  const filteredProducts = products.filter((product) => {
    if (filterType === "above500") {
      return product.price > 500;
    }

    if (filterType === "below500") {
      return product.price < 500;
    }
    if (filterType == "above200butbelow500") {
      return product.price > 200 && product.price < 500;
    }

    return true;
  });

  return (
    <div>
      <h1>Product Filter</h1>

      <select onChange={(e) => setFilterType(e.target.value)}>
        <option value="all">All</option>
        <option value="above500">Above 500</option>
        <option value="below500">Below 500</option>
        <option value="above200butbelow500">Above 200 but Below 500</option>
      </select>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
