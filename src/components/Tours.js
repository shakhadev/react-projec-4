import React from "react";
// import Cards from "./data";
import "./index.css";
import { useState } from "react";
const Tours = ({ img, info, price, name, id, func }) => {
  const [isshown, setisshown] = useState(false);
  return (
    <div className="single-tour">
      <img src={img} />
      <div className="tour-info">
        <span className="tour-price">{price}$</span>
        <h4 className="tour-name">{name}</h4>
        <p className="text">
          {!isshown && `${info.substring(0, 100)}`}
          {isshown && info}
          <button
            onClick={() => {
              setisshown(!isshown);
            }}
          >
            {" "}
            {isshown && "show less"}
            {!isshown && "read more"}
          </button>
        </p>
      </div>
      <button onClick={() => func(id)} className="delete-btn">
        not interested
      </button>
    </div>
  );
};

export default Tours;
