import React from 'react';
import styles from './custlink.module.css'
import { Link } from 'react-router-dom';


const CustLink = ({ text, path, style}) => {
    return (
        <Link to={path} className={styles.link} style={style}>
            { text }
        </Link>
    );
};

export default CustLink;