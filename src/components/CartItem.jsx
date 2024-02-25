import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Quantity from "./Quantity";
import axios from "axios";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  const userId = localStorage.getItem("userId");
  const [addToCart, setAddToCart] = useState({
    _id: userId,
    products: [props.productId],
    addedQuantity: props.addedQuantity,
  });

  useEffect(() => {
    async function handleAddToCartSave() {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URI}/api/cart/addtocart`,
          addToCart,
          { headers: { "Content-Type": "application/json" } }
        );
        const responseBody = response.data;
      } catch (err) {
        console.error(err);
      }
    }
    handleAddToCartSave();
    props.setProductList((prevValue) => {
      const index = prevValue.findIndex(
        (product) => product.productId === props.productId
      );

      if (index !== -1) {
        const updatedProductList = [...prevValue];
        updatedProductList[index] = {
          ...updatedProductList[index],
          quantity: addToCart.addedQuantity,
        };

        return updatedProductList;
      }

      return prevValue;
    });
  }, [addToCart.addedQuantity]);

  return (
    <>
      <tbody>
        <tr className="grid grid-cols-3 md:grid-cols-4 gap-4 my-10">
          <td className="m-auto row-span-3 flex justify-center">
            <div className="" style={{ width: "100px" }}>
              <img className="" src={props.src} alt="" />
            </div>
          </td>
          <td className="flex m-auto justify-center gap-3 md:row-span-3">
            <h3 className="m-auto">
              <Link to={`/shop/${props.productId}`}>{props.productName}</Link>
            </h3>
            <p className="m-auto">{props.unitPrice}</p>
            <div
              className="delete-btn"
              onClick={(e) => {
                props.handleDelete(props.id);
              }}
            >
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </div>
          </td>
          <td className="flex m-auto row-start-2 col-start-2 md:row-start-1 row-span-3 md:col-start-3">
            <Quantity setAddToCart={setAddToCart} addToCart={addToCart} />
          </td>
          <td className="row-span-3 flex justify-center flex-col mx-auto">
            <p className="">{props.totalPrice}</p>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItem;
