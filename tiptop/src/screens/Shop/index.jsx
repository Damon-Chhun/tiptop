import React from "react";
import { useState, useEffect } from "react";
import FilterGroup from "../../components/FilterGroup";
import Cards from "../../components/card/card";
import { selectFilterShop, selectShop } from "../../store/shop/shop.select";
import { useDispatch, useSelector } from "react-redux";
import { getFilterShopData, getShopData } from "../../store/shop/shop";
import { getDepartmentItems } from "../../util/firebase/firebase";
import "./cardScreen.sass";

const Shop = () => {
  const dispatch = useDispatch();
  const shopData = useSelector(selectShop);
  const filterShop = useSelector(selectFilterShop);

  const filters = ["hats", "jackets", "mens", "sneakers", "womens"];

  const [filter, setFilter] = useState({ department: filters[0] });

  useEffect(() => {
    // dispatch(getShopData());
    dispatch(getFilterShopData(filter));
  }, [dispatch, filter]);

  if (filterShop !== null) {
    return (
      <div style={{ width: "100vw", minHeight: "100vh" }}>
        <FilterGroup filter={filter} setFilter={setFilter} filters={filters} />
        <div className="cardContainer">
          {filterShop.items.map((item) => {
            return <Cards data={item} />;
          })}
        </div>
      </div>
    );
  }
};

export default Shop;
