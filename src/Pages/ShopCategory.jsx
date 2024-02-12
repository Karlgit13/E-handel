import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSort = () => {
    setIsOpen(!isOpen)
  };

  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <button onClick={toggleSort} className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="dropdown" />
          {isOpen && (
            <div className="dropdown-div">
            <button>Most Popular</button>
            <button>Lowest Price</button>
            <button>Highest Price</button>
          </div>
          )}
        </button>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
