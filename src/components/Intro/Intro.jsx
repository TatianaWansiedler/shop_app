import React from 'react';
import styles from './intro.module.css'
import img from '../../assets/armchair.png'
import CustLink from '../CustLink/CustLink';
const Intro = () => {
    return (
        <div className={styles.blok}>
            <div className={styles.blok_descr}>
                <h1 className={styles.title}>Rocket single <br /> seater</h1>
                <CustLink text={ 'Shop Now' } path={'/catalog'}/>
            </div >
            <div className={styles.img_item} style={{backgroundImage: `url(${img})`}}>
            </div>
        </div>
    );
};

export default Intro;