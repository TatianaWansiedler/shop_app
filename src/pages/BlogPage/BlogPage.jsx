import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Post from '../../components/Post/Post';
import PostsSearch from '../../components/PostsSearch/PostsSearch';
import styles from './blogPage.module.css'

const BlogPage = () => {
    return (
        <div className={styles.page}>
            <Breadcrumbs title={'Blog'} />
            <div className={ styles.page_content}>
                <div className={ styles.posts_wrapper}>
                    <Post />
                    <Post />
                    <Post />
                </div>
                <PostsSearch />
            </div>
        </div>
    );
};

export default BlogPage;