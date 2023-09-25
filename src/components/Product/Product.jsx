import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import cart_icon from '../../assets/cart-plus-solid.svg'


const Product = (product) => {
    const { id, images, title, price, productView } = product
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
        <div className={styles[`view-${productView}`]}>
            <img src={images[0]} alt={"product_image"} className={styles.img} />
            <div className={styles.info}>
                <Link to={`/catalog/${id}`} className={styles.name}>
                    {title}
                </Link>
                <div className={ styles.actions}>
                    <h4 className={styles.price}>
                        Rs. {price}
                    </h4>
                    <button
                        className={styles.add_btn}
                        onClick={() => dispatch(addToCart({ ...product, quantity }))}
                    >
                        <img src={cart_icon} alt="cart_icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;