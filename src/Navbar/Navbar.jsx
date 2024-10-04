import styles from './Navbar.module.css';
// import { useState } from 'react';
const Header = () => {
    
    
    return (
        <>
            <div className={styles.navcontainner}>
                <div className={styles.logo}>
                    <img src='https://flowbite.com/docs/images/logo.svg' alt="logo" />
                    <h1>GeekFoods</h1>
                </div>
                <div className={styles.navlinks}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Quote</a></li>
                        <li><a href="#services">Resturants</a></li>
                        <li><a href="#Foods">Foods</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <button className={styles.getstartedbtn}>
                    Get Started
                </button>
                <div className={styles.hamburger}>

                    <a><i class="fa-solid fa-bars"></i></a>
                </div>

            </div>


        </>
    )
}
export default Header;