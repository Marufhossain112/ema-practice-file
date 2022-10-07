import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Reviewitem.css";
const ReviewItem = ({ product }) => {
  const { name, price, quantity, img ,shipping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <h3>{name}</h3>
          <p>
            {" "}
            <small>Price : {price}</small>{" "}
          </p>
          <p>
            {" "}
            <small>Shipping : {shipping}</small>{" "}
          </p>
          <p>
            {" "}
            <small>Quantity : {quantity}</small>{" "}
          </p>
        </div>
        <div className="delete-container">
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
