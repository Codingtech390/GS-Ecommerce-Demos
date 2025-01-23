import React, { useContext, useEffect } from "react";

import axios from "axios";
import {toast} from "react-toastify";

import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async (req, res) => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/verifyStripePayment",
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
        toast.success("Payment Successful!");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return <div></div>;
};

export default Verify;
