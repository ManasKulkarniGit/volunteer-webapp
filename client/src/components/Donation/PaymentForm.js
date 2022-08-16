import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const PaymentForm = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(stripe && elements)) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, token } = await stripe.createToken(cardElement);
    if (!error) {
     return fetch("/payment", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + sessionStorage.getItem("token")
        },
        body: JSON.stringify({
          token: token.id,
          currency: "USD",
          price: amount * 100,
          email: sessionStorage.getItem("email")
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          
          alert(result.outcome.seller_message);
          navigate("/dashboard");
        })
    }
    alert(error.message)
  };

  return (
    <div className="mt-48 w-1/2 mx-auto">
      <form onSubmit={handleSubmit}>
        <input type="number" className="p-3" placeholder="$" required onChange={e => setAmount(e.target.value)} />
        <CardElement className="my-5 p-5 bg-slate-300"/>
        <button className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default PaymentForm;
