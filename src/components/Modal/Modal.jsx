import React from "react";
import styles from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import close_btn from '../../assets/basket-close-icon.png';
import close_icon from '../../assets/close-icon.png';

const Modal = () => {
  const isOpen = useSelector(state => state.cart.isOpen)
  const dispatch = useDispatch()
  const productsCart = useSelector(state => state.cart.productsCart)
  const sum = useSelector(state => state.cart.sum)

  return (
    isOpen && productsCart.length > 0 && (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <img
            src={close_btn}
            alt="close_btn"
            className={styles.close}
            onClick={() => dispatch(closeModal())}
          />
          <h2 className={styles.title}>Shopping Cart</h2>
          <div className={styles.line}></div>
          <div className={styles.products}>
            {productsCart.map((product) => {
              return (
                <div className={styles.product} key={product.id}>
                  <img src={product.images[0]} alt={product.title} className={styles.img} />
                  <div className={styles.info}>
                    <h5 className={styles.name}>{product.title}</h5>
                    <p>{product.quantity} x Rs. {product.price}</p>
                  </div>
                  <button className={styles.del_btn} onClick={() => dispatch(deleteFromCart(product.id))}>
                    <img src={close_icon} alt="close-icon" />
                  </button>
                </div>
              )
            })}
          </div>
          <div className={styles.bottom}>
            <div className={styles.total}>
              <p className={styles.subtotal}>Subtotal</p> Rs. {sum}
            </div>
            <div className={styles.line}></div>
            <Link
              to="/cart"
              className={styles.link}
              onClick={() => dispatch(closeModal())}
            >
              View Cart
            </Link>
            <Link
              to="/checkout"
              className={styles.link}
              onClick={() => dispatch(closeModal())}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
