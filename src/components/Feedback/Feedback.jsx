import React from 'react';
import styles from './feedback.module.css'
import { TextField } from '@mui/material';
import loc from './loc.svg'
import clock from './clock-fill.svg'
import phone from './phone.svg'

const info = [
    { icon: loc, title: 'Address', info: '236 5th SE Avenue, New York NY10000, United States' },
    { icon: phone, title: 'Phone', info: 'Mobile: +(84) 546-6789 Hotline: +(84) 456-6789' },
    { icon: clock, title: 'Working Time', info: 'Monday-Friday: 9:00 - 22:00 Saturday- Sunday: 9:00 - 21:00' },
]

const Feedback = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contacts}>
                {
                    info.map(({ icon, title, info }) =>
                        <div className={styles.item}>
                            <img src={icon} alt={`icon ${icon}`} />
                            <div className={styles.item_descr}>
                                <h4>{title}</h4>
                                <p>{info}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <form className={styles.form}>
                <TextField
                    label="Your name"
                    variant="outlined"
                    name="name"
                    placeholder='Abc'
                    fullWidth="true"
                />
                <TextField
                    label="Email address"
                    variant="outlined"
                    name="name"
                    placeholder='Abc@def.com'
                    fullWidth="true"
                />
                <TextField
                    label="Subject"
                    select
                    variant="outlined"
                    name="name"
                    fullWidth="true"
                />
                <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Hi! i'd like to ask about"
                />
                <input type="submit" value="Submit" className={styles.submit} />
            </form>
        </div>
    );
};

export default Feedback;