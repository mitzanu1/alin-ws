'use client'
import { useTranslation } from 'react-i18next';

import styles from './main.module.css'

export default function Main () {

  const { t } = useTranslation()

    return (
        <div className='wrap bg1' id='home'>
        <section className={styles.main}>
            <h1>{t('main-title')}</h1>
            <p>{t('main-article')}</p>    
            <a href='tel:+40727967407'>
              <button className={styles.glow}>{t('call-us')} : +40 727 967 406 </button>       
            </a>
        </section> 
        </div>
    )
}