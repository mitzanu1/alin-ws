'use client'
import styles from './footer.module.css'


export default function Footer () {


    return (
        <footer className={styles.main}>
            <div className={styles.logo}>
                <img 
                    src='logo.png' 
                    alt='Logo'
                />
            </div>
            <div className={styles.cr}>Made by a noob :D</div>
        </footer>
    )
}