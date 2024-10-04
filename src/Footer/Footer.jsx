import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <>
    <footer className={styles.footer}>
        <p className={styles.myname}>�� 2024 Sivam Namdev. All rights reserved.</p>
        <div className={styles.logos}>
            <a href=""><i class="fa-solid fa-burger"></i> Logoipsum</a>
        </div>
        <p className={styles.pera}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        <br></br>Incidunt consequuntur amet culpa cum itaque neque.

        </p>
        
        
        <ul className={styles.lists}>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
          
        </ul>
        <div className={styles.social}>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-google"></i></a>
            <a href="#"><i class="fab fa-pinterest"></i></a>
        </div>
    </footer>
    </>
    )

}

export default Footer

