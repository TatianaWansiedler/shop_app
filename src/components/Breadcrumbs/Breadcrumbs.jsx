import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';
import breadcrumb from '../../assets/breadcrumb-logo.png'

const Breadcrumbs = ({title}) => {

    const {pathname} = useLocation()

    return (
        <div className={styles.wrapper}>
            <img
                src={breadcrumb}
                alt="links"
                className={styles.icon}
            />
            <h1>{title}</h1>
            <div className={styles.breadcrumb}>
               <Link className={styles.link_from} to="/">Home</Link> 
                &#8594; 
                <Link className={styles.link_to} to={pathname}>{title}</Link> 
            </div>
        </div>
    );
};

export default Breadcrumbs;