import React from "react";
import "../../App.css";

const SingleCharacter = (props) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={props.image} alt="" />
        </div>
        <div className="card-back">
          <h1>{props.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {props.portrayed}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
