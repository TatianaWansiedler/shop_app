import React, { useEffect, useState } from 'react';
import productService from '../../services/products';
import Product from '../Product/Product';
import styles from './topProducts.module.css'
import CustLink from '../CustLink/CustLink';

const TopProducts = () => {
    const [topProducts, setTopProducts] = useState()
    useEffect(() => {
        productService
            .getNewProduct()
            .then(res => setTopProducts(res.data))
    }, [])
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Top Picks For You</h2>
            <p className={styles.subtitle}>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className={styles.products_wrapper}>
                {
                    topProducts && topProducts.filter((_, i) => i < 4).map(item =>
                        <Product
                            key={item.id}
                            {...item}
                            productView={'4'}
                        />)
                }
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CustLink text={'View More'} path={'/catalog'} />
            </div>
        </div>
    );
};

export default TopProducts;