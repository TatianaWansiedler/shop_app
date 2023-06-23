import React, { useState } from 'react';
import styles from './checkout.module.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import axios from 'axios';

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('')
  const cart = useSelector(state => state.cart)
  const stripe = useStripe()
  const elements = useElements()

  useEffect(()=>{
    axios.post("https://whispering-river-87788.herokuapp.com/api/create-payment-intent", {
      total: cart.sum
    })
    .then(res => setClientSecret(res.data.clientSecret))
  },[])

  const pay = (e) => {
    e.preventDefault()
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    .then(res => console.log(res))
  }

    return (
      <>
      <Breadcrumbs />
      <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={pay}>
        <div>
          <CardElement/>
        </div>
        <button>Pay</button>
      </form>
      <div className={styles["product-wrapper"]}>
        <p className={styles["product-title"]}> Product  <span>Subtotal</span> </p>
        {
          cart.productsCart.map(({title, price, quantity}) => {
            return  <p className={styles["product-name"]}>  {title} X {quantity} <span>Rs. {price*quantity}</span> </p>
          })
        }
        <p className={styles["product-subtotal"]}>  Subtotal  <span>Rs.{cart.sum}</span> </p>
        <p className={styles["product-total"]}> Total  <span>Rs. {cart.sum}</span> </p>
      </div>
      </div>
      </>
    );
};

export default CheckoutForm;