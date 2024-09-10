'use client'
import { useTranslation } from 'react-i18next';

import styles from './portfolio.module.css'

export default function Portfolio () {

  const { t } = useTranslation()

    return (
        <div className='wrap bg3' id='portfolio'>
        <section className={styles.main} >
            <h1>{t('pf-title')}</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <a href='https://www.avochat.net/' target='_blank'>
                    <div className={styles.img}></div>
                    <div className={styles.desc}>
                        <h4>{t('pf1-name')}</h4>
                        <p>{t('pf1-desc')}</p>
                    </div>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='https://www.avochat.net/' target='_blank'>
                    <div className={styles.img}></div>
                    <div className={styles.desc}>
                        <h4>{t('pf1-name')}</h4>
                        <p>{t('pf1-desc')}</p>
                    </div>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='https://www.avochat.net/' target='_blank'>
                    <div className={styles.img}></div>
                    <div className={styles.desc}>
                        <h4>{t('pf1-name')}</h4>
                        <p>{t('pf1-desc')}</p>
                    </div>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='https://www.avochat.net/' target='_blank'>
                    <div className={styles.img}></div>
                    <div className={styles.desc}>
                        <h4>{t('pf1-name')}</h4>
                        <p>{t('pf1-desc')}</p>
                    </div>
                    </a>
                </div>
                
            </div>
        </section>
        </div>
    )
}