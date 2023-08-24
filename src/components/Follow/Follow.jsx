import React from 'react';
import styles from './follow.module.css'

const Follow = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Our Instagram</h2>
            <p className={styles.subtitle}>Follow our store on Instagram</p>
            <a
                href='https://www.instagram.com/'
                target='_blank' rel="noreferrer"
                className={styles.follow_btn}
            >
                Follow Us
            </a>
        </div>
    );
};
export default Follow;