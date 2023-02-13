import "./App.css";
import "./components/index.css";
import Tours from "./components/Tours";
import Cards from "./components/data";
import React, { useState } from "react";
function App() {
  const [datA, setData] = useState(Cards);
  const dElete = (e) => {
    setData((item) => {
      return item.filter((item2) => item2.id !== e);
    });
  };
  const zerO = () => {
    if (datA.length === 0) {
    } else {
    }
  };
  zerO();
  return (
    <div className="App">
      <div className="title">
        {!(datA.length === 0) ? (
          <div>
          
            <h2>our tours</h2>
            <div className="underline"></div>
          </div>
        ) : (
          <div>
            <h2>no tours left </h2>
            <button
              className="btn"
              onClick={() => {
                setData(Cards);
              }}
            >
              refresh
            </button>
          </div>
        )}
      </div>
      <div className="tours">
        {datA.map((item) => {
          return (
            <Tours
              id={item.id}
              name={item.name}
              info={item.info}
              img={item.image}
              price={item.price}
              key={item.id}
              func={dElete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
