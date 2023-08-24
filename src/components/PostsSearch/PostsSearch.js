import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import searchIcon from '../../assets/search.svg'
import styles from './postsSearch.module.css'

const PostsSearch = () => {
    const categories = [
        { title: "Crafts", count: 2 },
        { title: "Design", count: 8 },
        { title: "Handmade", count: 7 },
        { title: "Interior", count: 1 },
        { title: "Wood", count: 6 },
    ]

    return (
        <div className={styles.container}>
            <TextField
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={searchIcon} alt="search_icon" />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                fullWidth
            />

            <div className={styles.categories}>
                <h2 className={styles.title}>Categories</h2>
                <div className={styles.categories_wrapper}>
                    {
                        categories.map(el =>
                            <div key={el.title} className={styles.category_item}>
                                <span>{el.title}</span>
                                <span>{el.count}</span>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PostsSearch;