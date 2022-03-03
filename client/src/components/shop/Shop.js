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

  if (!prod) {
    return <div className="text-center py-5"> Loading... </div>;
  }

  return (
    <section id="shop">
      <header
        className={`masthead text-center text-white ${category || "allSeed"}`}
      >
        <div className="masthead-content">
          <div className="container px-5">
            <h1 className="masthead-heading mb-0 text-capitalize">
              {category || "All Seed"}s.
            </h1>
          </div>
        </div>
      </header>
      {prod && <ProductGrid products={prod} />}
      {prod.length === 0 && <h1 className="text-center py-5">No Products</h1>}
    </section>
  );
};

const mapStateToProps = ({ prod }) => {
  return { prod };
};

export default connect(mapStateToProps, actions)(Shop);
