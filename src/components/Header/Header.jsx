import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.css'
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';

const Header = () => {
    const user = useSelector(state => state.user.currentUser)
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <>
        <header>
            <div className={styles.wrapper} >
                <nav className={styles.nav}>
                    <NavLink to='/' className={styles.link} >Home</NavLink>
                    <NavLink to='/catalog' className={styles.link} >Shop</NavLink>
                    <NavLink  to='/' className={styles.link} >About</NavLink>
                    <NavLink to='/' className={styles.link} >Contact</NavLink>
                </nav>
                <div className={styles.icons}>
                    {
                        !user && (
                            <NavLink to="/account" className={styles.icon}>
                                <img src="/images/profile-icon.png" alt="" className={styles.icon} />
                            </NavLink>
                        )
                    }

                    <p className={styles.icon}>
                        <img src="/images/search-icon.png" alt="" className={styles.icon} />
                    </p>
                    <p className={styles.icon}>
                        <img src="/images/favorite-icon.png" alt="" className={styles.icon} />
                    </p>
                    <Link to="/cart" className={styles.icon}>
                        {quantity > 0 && <span className={styles.quantity}>{quantity}</span>}
                        <img src="/images/basket-icon.png " alt="" className={styles.icon} />
                    </Link>
                </div>
                {
                    user && <div>{user.username}</div>
                }
                <Modal/>
            </div>
        </header>
        </>
    );
};

export default Header;