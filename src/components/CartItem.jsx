import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const CartItem = (props) => {
  return (
    <div className="flex justify-between">
      <div className="flex p-12">
        <img className="w-48" src={props.src} alt="" />
        <div className="pl-10">
          <h3>{props.productName}</h3>
          <p>{props.unitPrice}</p>
        </div>
        <div className="pl-10 pr-4">Quantity</div>
        <div
          onClick={(e) => {
            props.handleDelete(props.id);
          }}
        >
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex justify-center flex-row py-16 gap-10 pr-12">
        <p className="">{props.totalPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
