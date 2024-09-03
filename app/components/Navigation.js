'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './navigation.module.css'
import Link from "next/link";

export default function Navigation() {
  const [display, setDisplay] = React.useState('flex')
    
  const { t } = useTranslation()
  const toogleView = () => {
     display === 'none' ? setDisplay('flex') : setDisplay('none')
  }
    
    return (
        <nav className={styles.nav}>
          <section className={styles.logo}>Logo</section>
          <div 
            className={styles.menubtn}
            onClick={()=> toogleView()}
          >
            <div className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
          <section>
            <ul 
              className={styles.links}
              style={{display:display}}
            >
                <li><Link href='#home'>{t('home')}</Link></li>
                <li><Link href='#techStach'>{t('techStack')}</Link></li>
                <li><Link href='#team'>{t('team')}</Link></li>
                <li><Link href='#portfolio'>{t('portfolio')}</Link></li>
                <li><Link href='#contact'>{t('contact')}</Link></li>                
            </ul>
          </section>
        </nav>
    )
}