'use client'
import styles from './main.module.css'
import { useTranslation } from 'react-i18next';

export default function Main () {

  const { t } = useTranslation()

    return (
        <div className='wrap bg1'>
        <section className={styles.main}>
            <h1>{t('main-title')}</h1>
            <p>{t('main-article')}</p>    
            <button className={styles.glow}>{'406 967 (727) 40+'} :{t('call-us')} </button>       
        </section> 
        </div>
    )
}