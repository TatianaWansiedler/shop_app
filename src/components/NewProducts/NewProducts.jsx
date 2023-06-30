import React, { useEffect, useState } from 'react';
import styles from './newproduct.module.css'
import productService from '../../services/products';
import CustLink from '../CustLink/CustLink';


const NewProducts = () => {
    const [newProducts, setNewProducts] = useState()
    useEffect(() => { 
        productService
            .getNewProduct()
            .then(res => { 
                const random_sort_data =
                    res.data.filter(el => !el.title.startsWith('test'))
                            .sort(() => { return Math.random() - 0.5 })
                setNewProducts(random_sort_data)
            })
    }, [])

    return (
        <div className={styles.container}>
            <div className={ styles.prod_items}>
                {
                    newProducts && newProducts.filter((item, i) => i < 2).map(({ _id, title, img }) =>
                        <div key={_id} className={ styles.prod_item}>
                            <img src={img} alt={title} className={styles.img} />
                            <div className={ styles.info }>
                                <p className={styles.product_title}>
                                    {title}
                                </p>
                                <CustLink text={'View More'} path={`/catalog/${_id}`} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default NewProducts;