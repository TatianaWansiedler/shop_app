import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css'
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';

const Header = () => {
    const user = useSelector(state => state.user.currentUser)
    const quantity = useSelector(state => state.cart.quantity)
    const location = useLocation()
    return (
        <>
            <header style={{ background: location.pathname === '/' ? '#FBEBB5' : 'transparent' }}>
                <div className={styles.wrapper}>
                    <nav className={styles.nav}>
                        <NavLink to='/' className={styles.link} >Home</NavLink>
                        <NavLink to='/catalog' className={styles.link} >Shop</NavLink>
                        <NavLink to='/blog' className={styles.link} >Blog</NavLink>
                        <NavLink to='/contact' className={styles.link} >Contact</NavLink>
                    </nav>
                    <div className={styles.icons}>
                        {
                            !user && (
                                <NavLink to="/account" className={styles.icon}>
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/acc.svg"}
                                        alt="account_icon"
                                        className={styles.icon}
                                    />
                                </NavLink>
                            )
                        }

                        <p className={styles.icon}>
                            <img
                                src={process.env.PUBLIC_URL + "/images/search.svg"}
                                alt="search_icon"
                                className={styles.icon}
                            />
                        </p>
                        <p className={styles.icon}>
                            <img
                                src={process.env.PUBLIC_URL + "/images/heart.svg"}
                                alt="favorite_icon"
                                className={styles.icon}
                            />
                        </p>
                        <Link to="/cart" className={styles.icon}>
                            {quantity > 0 && <span className={styles.quantity}>{quantity}</span>}
                            <img
                                src={process.env.PUBLIC_URL + "/images/cart.svg"}
                                alt="cart_icon"
                                className={styles.icon}
                            />
                        </Link>
                    </div>
                    {
                        user && <div>{user.username}</div>
                    }
                    <Modal />
                </div>
            </header>
        </>
    );
};

export default Header;