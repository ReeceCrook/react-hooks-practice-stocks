import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ clickedStock, setClickedStock}) {

  function handleClick(stock) {
    const filteredStocks = clickedStock.filter((currentStock) => currentStock !== stock)
    setClickedStock(filteredStocks)
  }


  return (
    <div>
      <h2>My Portfolio</h2>
      {clickedStock?.map((stock) => {
        return(
          <div key={stock.id} className="card" onClick={() => handleClick(stock)}>
            <div className="card-body">
              <h5 className="card-title">{stock.name}</h5>
              <p className="card-text">{stock.price}</p>
            </div>
          </div>
        )
      })
      } 
    </div>
  );
}

export default PortfolioContainer;
