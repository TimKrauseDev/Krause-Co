import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";

import ProductGrid from "./ProductGrid";

const Shop = ({ fetchProducts, prod }) => {
  const category = useParams().category || "";

  useEffect(() => {
    fetchProducts(category);
  }, [fetchProducts, category]);

  return (
    <section id="shop">
      <h1 className="text-center pt-5">{category || "All Products"} </h1>
      {prod && <ProductGrid products={prod} />}
    </section>
  );
};

const mapStateToProps = ({ prod }) => {
  return { prod };
};

export default connect(mapStateToProps, actions)(Shop);
