import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Feedback from '../../components/Feedback/Feedback';
import Info from '../../components/Info/Info';
import styles from './contactpage.module.css'

const ContactPage = () => {
    return (
        <div className={styles.page}>
            <Breadcrumbs title={'Contact'} />
            <div className={styles.wrapper}>
                <h1>Get In Touch With Us</h1>
                <h3>
                    For More Information About Our Product & Services.
                    Please Feel Free To Drop Us An Email.
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </h3>
                <Feedback />
            </div>
            <Info />
        </div>
    );
};

export default ContactPage;