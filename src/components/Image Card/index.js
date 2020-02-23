import React from "react";
import "./style.css";

function ImageCard({ clickHandler, id, image, name }) {
  return (
    <div onClick={() => clickHandler(id)} className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
    </div>
  );
}

export default ImageCard;
