import React from "react";

import GridItem from "./GridItem";

const renderProducts = (products) =>
  products.map((product, index) => <GridItem key={index} product={product} />);

const ProductGrid = ({ products }) => {
  return (
    <div className="grid py-5 bg-light">
      <div className=".container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {renderProducts(products)}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
