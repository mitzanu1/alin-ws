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
            <button className={styles.glow}>{'406 967 (727) 40+'} :{t('call-us')} </button>       
        </section> 
        </div>
    )
}