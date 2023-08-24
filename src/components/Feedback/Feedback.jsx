import React, { useState } from 'react';
import styles from './feedback.module.css'
import { TextField, MenuItem } from '@mui/material';
import loc from '../../assets/loc.svg'
import clock from '../../assets/clock-fill.svg'
import phone from '../../assets/phone.svg'

const Feedback = () => {
    const [contactsData, setContactsData] = useState({})
    const info = [
        { icon: loc, title: 'Address', info: '236 5th SE Avenue, New York NY10000, United States' },
        { icon: phone, title: 'Phone', info: 'Mobile: +(84) 546-6789 Hotline: +(84) 456-6789' },
        { icon: clock, title: 'Working Time', info: 'Monday-Friday: 9:00 - 22:00 Saturday- Sunday: 9:00 - 21:00' },
    ]

    const subjects = [
        { value: 'This is an optional', disabled: true },
        { value: 'subject1', disabled: false },
        { value: 'subject2', disabled: false },
        { value: 'subject3', disabled: false }
    ];

    const formhandler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        const formObject = Object.fromEntries(data.entries());
        setContactsData(formObject)
    }

    return (
        <div className={styles.container}>
            <div className={styles.contacts}>
                {
                    info.map(({ icon, title, info }) =>
                        <div className={styles.item} key={title}>
                            <img src={icon} alt={`icon ${icon}`} />
                            <div className={styles.item_descr}>
                                <h4>{title}</h4>
                                <p>{info}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <form className={styles.form} onSubmit={formhandler}>
                <TextField
                    label="Your name"
                    variant="outlined"
                    name="name"
                    placeholder='Abc'
                    fullWidth={true}
                />
                <TextField
                    label="Email address"
                    variant="outlined"
                    name="adress"
                    placeholder='Abc@def.com'
                    fullWidth={true}
                />
                <TextField
                    label="Subject"
                    select
                    variant="outlined"
                    name="subject"
                    fullWidth={true}
                    defaultValue="This is an optional"
                >
                    {subjects.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Message"
                    name='message'
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