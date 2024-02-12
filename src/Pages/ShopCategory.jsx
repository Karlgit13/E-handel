import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentSortOption, setCurrentSortOption] = useState("");
  const { all_product } = useContext(ShopContext);

  const toggleSort = () => {
    setIsOpen(!isOpen);
  };

  const sortFakeMostPopular = () => {
    const filteredAndSorted = [...all_product]
      .filter((item) => item.category === props.category)
      .sort((a, b) => b.fake_ratings - a.fake_ratings);
    setSortedProducts(filteredAndSorted);
    setCurrentSortOption("Most Popular");
  };

  const sortLowestPrices = () => {
    const lowestPrices = [...all_product]
      .filter((item) => item.category === props.category)
      .sort((a, b) => a.new_price - b.new_price);
    setSortedProducts(lowestPrices);
    setCurrentSortOption("Lowest Price");
  };

  const sortHighestPrices = () => {
    const highestPrices = [...all_product]
      .filter((item) => item.category === props.category)
      .sort((a, b) => b.new_price - a.new_price);
    setSortedProducts(highestPrices);
    setCurrentSortOption("Highest Price");
  };

  useEffect(() => {
    setSortedProducts(
      all_product.filter((item) => item.category === props.category)
    );
  }, [all_product, props.category]);

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div onClick={toggleSort} className="shopcategory-sort">
          {currentSortOption ? `${currentSortOption}` : "Sort by "}
          <img className="dropdownIcon" src={dropdown_icon} alt="sort icon" />
          {isOpen && (
            <div className="dropdown-div">
              <button onClick={sortFakeMostPopular}>Most Popular</button>
              <button onClick={sortLowestPrices}>Lowest Price</button>
              <button onClick={sortHighestPrices}>Highest Price</button>
            </div>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
