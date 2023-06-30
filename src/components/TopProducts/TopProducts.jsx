import React, { useEffect, useState } from 'react';
import productService from '../../services/products';
import Product from '../Product/Product';
import styles from './topProducts.module.css'
import CustLink from '../CustLink/CustLink';
// Выводим категории и их картинку /api/categories 
 
const TopProducts = () => {
    const [topProducts, setTopProducts] = useState()
    useEffect(() => { 
        productService
            .getNewProduct()
            .then(res => { 
                const filteredData =
                    res.data.filter(el => !el.title.startsWith('test'))
                setTopProducts(filteredData)
            })
    }, [])
    return (
        <div className={ styles.container}>
            <h2 className={ styles.title}>Top Picks For You</h2>
            <p className={ styles.subtitle}>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className={ styles.products_wrapper}>
                {
                    // hardcode so far
                   topProducts && topProducts.filter((item, i) => i < 4).map(item => 
                        <Product 
                            key={item._id} 
                           {...item}
                           productView={'4'}
                    />)
                }
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CustLink text={'View More'} />
            </div>
        </div>
    );
};

export default TopProducts;