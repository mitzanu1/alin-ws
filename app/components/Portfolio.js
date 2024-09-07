'use client'
import styles from './portfolio.module.css'
import { useTranslation } from 'react-i18next';

export default function Portfolio () {

  const { t } = useTranslation()

    return (
        <div className='wrap bg3'>
        <section className={styles.main} id='portfolio'>
            <h1>Portfolio</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='' />
                    </div>
                    <div className={styles.desc}>
                        <p>{t('portfolio1-desc')}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='' />
                    </div>
                    <div className={styles.desc}>
                        <p>{t('portfolio1-desc')}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='' />
                    </div>
                    <div className={styles.desc}>
                        <p>{t('portfolio1-desc')}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='' />
                    </div>
                    <div className={styles.desc}>
                        <p>{t('portfolio1-desc')}</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}