import React from "react";
import Stock from "./Stock";

function StockContainer({ clickedStock, setClickedStock, alphabetic, price }) {
  return (
    <div>
      <h2>Stocks</h2>
      <Stock clickedStock={clickedStock} setClickedStock={setClickedStock} alphabetic={alphabetic} price={price} />
    </div>
  );
}

export default StockContainer;
