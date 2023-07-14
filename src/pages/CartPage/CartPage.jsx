import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import CartProduct from '../../components/CartProduct/CartProduct';
import styles from './cartpage.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//4242 4242 4242 4242

// pk_test_51LY447HWg33SQmOYkw5NDamYDIC6nmq6E8TuAzs8BFgElOjFEhM8GjZxjoIguoAhF07s5XgS346RXTd4Fx4xz9rX00cYDOothX

const CartPage = () => {
  const { productsCart, sum } = useSelector(state => state.cart)

    return (
      <>
        <Breadcrumbs  />
        <section className={styles.cart}>
          <div className={styles.wrapper}>
            <div className={styles.products}>
              <div className={styles.header}>
                <p className={styles.name}></p>
                <p className={styles.name}>Product</p>
                <p className={styles.name}>Price</p>
                <p className={styles.name}>Quantity</p>
                <p className={styles.name}>Subtotal</p>
                <p className={styles.name}></p>
              </div>
              {
                productsCart.map(product => <CartProduct key={ product._id } product={product}/>)
              }
              
            </div>
            <div className={styles.totals}>
              <h3 className={styles.title}>Cart totals</h3>
              <p className={styles.subtotal}>
                Subtotal <span>{sum}</span>
              </p>
              <p className={styles.total}>
                Total <span>{sum}</span>
              </p>
              <Link to="/checkout" className={styles.checkout}>Check Out</Link>
            </div>
          </div>
        </section>
      </>
    );
};

export default CartPage;