import React from 'react';
import CustLink from '../CustLink/CustLink';
import styles from './post.module.css'
import post_img from './media/post1.png'
import role from './media/role.svg'
import date from './media/date.svg'
import lable from './media/lable.svg'

const Post = () => {
    return (
        <div className={styles.post}>
            <img className={styles.post_img } src={post_img} alt={"post_img"} />
            <div className={styles.actions}>
                <div className={styles.actions_item}>
                    <img src={role} alt="" />
                    <span>Admin</span>
                </div>
                <div className={styles.actions_item}>
                    <img src={date} alt="" />
                    <span>14 Oct 2022</span>
                </div>
                <div className={styles.actions_item}>
                    <img src={lable} alt="" />
                    <span>Wood</span>
                </div>
            </div>
            <h2 className={styles.title}>Going all-in with millennial design</h2>
            <p className={styles.descr}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo
                integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.
                Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
                mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras
                tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <CustLink text={'View More'} path={`/`} style={{fontSize: '16px', fontWeight: 400}}/>
        </div>
    );
};

export default Post;