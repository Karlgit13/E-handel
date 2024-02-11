import React, { useContext } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const RelatedProducts = ({ currentCategory }) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    (item) => item.category === currentCategory
  );

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {filteredProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              category={item.category}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
