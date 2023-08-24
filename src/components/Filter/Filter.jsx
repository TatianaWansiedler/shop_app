import React from 'react';
import styles from './filter.module.css';
import filter from '../../assets/filter.svg';
import dots from '../../assets/dots.svg';
import two_item from '../../assets/two-item.svg';
import one_item from '../../assets/one-item.svg';


const Filter = ({setProductView, sort, setSort, itemsPerPage, setTtemsPerPage}) => {

    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img src={filter} alt="filter_icon" />
                    <p className={styles["filter-text"]}>Filter</p>
                    <button className={styles.icon_btn} onClick={()=> setProductView('4')}>
                        <img src={dots} alt="dots_icon" />
                    </button>
                    <button className={styles.icon_btn} onClick={()=> setProductView('2')}>
                        <img src={two_item} alt="two_item_icon" />
                    </button>
                    <button className={styles.icon_btn} onClick={()=> setProductView('1')}>
                        <img src={one_item} alt="one_item_icon" />
                    </button>
                    <p className={styles["amount-text"]}>Showing 1-{itemsPerPage} of 16 results</p>
                </div>
                <div className={styles.controls}>
                    <p className={styles.amount}>
                        Show
                        <select 
                            value={itemsPerPage} 
                            className={styles["amount-number"]}
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