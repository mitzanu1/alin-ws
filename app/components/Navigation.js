'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import Image from 'next/image';

import styles from './navigation.module.css'
import LanguageChanger from './LanguageChanger';

export default function Navigation() {
  const [display, setDisplay] = React.useState('none')
  const [opacity,setOpaciy] = React.useState(0)

  const { t } = useTranslation()
  const toogleView = () => {
    display === 'none' ? setDisplay('flex') : setDisplay('none')
    display === 'none' ? setTimeout(()=>setOpaciy(1),10) : setOpaciy(0)
    
  }
  
  const closeMenu = ()=>{
    if(window.innerWidth < 991) {
      setOpaciy(0)
      setTimeout(()=>setDisplay('none'),300)
    }
  }

    return (
        <nav className={styles.nav}>
          <section className={styles.logo}>
            <Image 
              src={'/logo.png'}
              alt='Logo'
              width={300}
              height={150}
            />
          </section>
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
          <section className={styles.linksContainer}>
            <ul 
              className={styles.links}
            >
                <li ><Link href='#home'>{t('home')}</Link></li>
                <li><Link href='#techStach'>{t('techStack')}</Link></li>
                <li><Link href='#portfolio'>{t('portfolio')}</Link></li>
                <li><Link href='#team'>{t('team')}</Link></li>
                <li><Link href='#contact'>{t('contact')}</Link></li>                
                <li className={styles.lng}><LanguageChanger /></li>
            </ul>

            <ul 
              className={styles.mobileLinks}
              style={{display:display,opacity:opacity}}
            >
                <li
                  onClick={()=>closeMenu()}
                ><Link href='#home'>{t('home')}</Link></li>
                <li
                  onClick={()=>closeMenu()}
                ><Link href='#techStach'>{t('techStack')}</Link></li>
                <li
                  onClick={()=>closeMenu()}
                ><Link href='#portfolio'>{t('portfolio')}</Link></li>
                <li
                  onClick={()=>closeMenu()}
                ><Link href='#team'>{t('team')}</Link></li>
                <li
                  onClick={()=>closeMenu()}
                ><Link href='#contact'>{t('contact')}</Link></li>
                <li className={styles.lng}><LanguageChanger /></li>                
            </ul>
          </section>
        </nav>
    )
}