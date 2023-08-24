import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css'


const Product = ({_id, img, title, price, createdAt, productView}) => {

    return (
        <div className={styles[`view-${productView}`]}>
            <img src={img} alt={"product_image"} className={styles.img} />
            <div className={styles.info}>
                <Link to={`/catalog/${_id}`} className={styles.name}>
                {title}
                </Link>
                <h4 className={styles.price}>
                    {price}
                </h4>
                <p>{new Date(createdAt).toString()}</p>
            </div>
        </div>
    );
};

export default Product;