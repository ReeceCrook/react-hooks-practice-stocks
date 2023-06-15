import React, { useEffect, useState } from "react";

function Stock({ clickedStock, setClickedStock, alphabetic, price }) {
  const [fetchResults, setFetchResults] = useState([])


  let obj = {
    names: [],
    price: [],
    sortedResults: []
  }
  console.log(price)
  
  fetchResults.map((current) => {
    obj.names.push(current.name)
    obj.price.push(current.price)
    obj.price.sort(function(a, b) {
      return a - b
    })
    obj.names.sort()
  })

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(data => setFetchResults(data))
  }, [])

  if(alphabetic === false){
        return (fetchResults.map((stock) => {
          return(
            <div key={stock.id} className="card" onClick={() => setClickedStock([...clickedStock, stock])}>
              <div className="card-body">
                <h5 className="card-title">{stock.name}</h5>
                <p className="card-text">{stock.price}</p>
              </div>
            </div>
          )
        }))
      } else {
        if(price === true) {
          obj.price.sort(function(a, b) {
            return a - b
          })
        }
        for(let i = 0; i < obj.names.length; i++) {
          obj.sortedResults.push(
          <div key={i} className="card" onClick={() => setClickedStock([...clickedStock, obj.names[i], obj.price[i]])}>
            <div className="card-body">
              <h5 className="card-title">{obj.names[i]}</h5>
              <p className="card-text">{obj.price[i]}</p>
            </div>
          </div>
        )}
        return obj.sortedResults

      }

}
export default Stock;
