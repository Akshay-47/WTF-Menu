import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import "../scss/_card.scss";

import { useDispatch } from "react-redux";
import { addToCart } from "../store/Cart";
import { updateItemQuantity } from "../store/Food";

const NewCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="card-item">
      <div className="image-wrapper">
        <img src={item.poster} alt={item.name} />
      </div>
      <div className="card-content">
        <div className="card-title">{item.name}</div>
        <div className="item-rating">4.6 123 reviews</div>
        <div className="card-footer">
          <div className="item-price"> &#8377;{item.price}</div>
          {item.quantity === 0 && (
            <div className="card-btn">
              <Button
                variant="outlined"
                onClick={() => {
                  let quantity = item.quantity + 1;
                  dispatch(updateItemQuantity(quantity, item.id));
                  dispatch(addToCart(item));
                }}
              >
                + Add
              </Button>
            </div>
          )}

          {item.quantity > 0 && (
            <div className="card-btn">
              <Button
                variant="outlined"
                onClick={() => {
                  let quantity = item.quantity - 1;
                  dispatch(updateItemQuantity(quantity, item.id));
                  dispatch(addToCart(item));
                }}
              >
                -
              </Button>

              {item.quantity}
              <Button
                variant="outlined"
                onClick={() => {
                  let quantity = item.quantity + 1;
                  dispatch(updateItemQuantity(quantity, item.id));
                  dispatch(addToCart(item));
                }}
              >
                +
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NewCard;
