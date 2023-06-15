import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [clickedStock, setClickedStock] = useState([])
  const [alphabetic, setAlphabetic] = useState(false)
  const [price, setPrice] = useState(false)


  return (
    <div>
      <SearchBar setAlphabetic={setAlphabetic} setPrice={setPrice} />
      <div className="row">
        <div className="col-8">
          <StockContainer clickedStock={clickedStock} setClickedStock={setClickedStock} alphabetic={alphabetic} price={price} />
        </div>
        <div className="col-4">
          <PortfolioContainer clickedStock={clickedStock} setClickedStock={setClickedStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
