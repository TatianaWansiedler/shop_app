import React from 'react';
import styles from './cartproduct.module.css';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import delete_icon from '../../assets/delete-icon.png'

const CartProduct = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.wrapper}>
            <img src={product.images[0]} alt={product.title} className={styles.img} />
            <p className={styles.name}>{product.title}</p>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.quantity}>{product.quantity}</p>
            <p className={styles.subtotal}>{product.quantity * product.price}</p>
            <button 
                className={styles.del_btn}
                onClick={()=>dispatch(deleteFromCart(product.id))}
            >
                <img src={delete_icon} alt="delete_icon" />
            </button>
        </div>
    );
};

export default CartProduct;