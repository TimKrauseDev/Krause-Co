import React from "react";

import GridItem from "./GridItem";

const renderProducts = (products) =>
  products.map((product, index) => <GridItem key={index} product={product} />);

const ProductGrid = ({ products }) => {
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid p-5 bg-light">
      <div className=".container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {products.length > 0 && renderProducts(products)}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
