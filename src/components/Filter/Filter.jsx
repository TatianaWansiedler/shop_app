import React from 'react';
import styles from './filter.module.css'

const Filter = ({setProductView, sort, setSort, itemsPerPage, setTtemsPerPage}) => {

    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img src="/images/filter.svg" alt="" />
                    <p className={styles["filter-text"]}>Filter</p>
                    <button className={styles.icon_btn} onClick={()=> setProductView('4')}>
                        <img src="/images/dots.svg" alt="" />
                    </button>
                    <button className={styles.icon_btn} onClick={()=> setProductView('2')}>
                        <img src="/images/two-item.svg" alt="" />
                    </button>
                    <button className={styles.icon_btn} onClick={()=> setProductView('1')}>
                        <img src="/images/one-item.svg" alt="" />
                    </button>
                    <p className={styles["amount-text"]}>Showing 1-{itemsPerPage} of 16 results</p>
                </div>
                <div className={styles.controls}>
                    <p className={styles.amount}>
                        Show
                        {/* <input type="number" className={styles["amount-number"]}/> */}
                        <select 
                            value={itemsPerPage} 
                            className={styles["amount-number"]}
                            defaultValue={'4'}
                            onChange={e => setTtemsPerPage(+e.target.value)}
                        >
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="16">16</option>
                        </select>    
                    </p>
                    <p>
                        Sort by 
                        <select value={sort} onChange={e => setSort(e.target.value)}>
                            <option value="newest">Newest</option>
                            <option value="price-up">Price-up</option>
                            <option value="price-down">Price-down</option>
                        </select>
                    </p>    
                </div>    
            </div>
        </div>
    );
};

export default Filter;