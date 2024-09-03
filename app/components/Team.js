'use client'
import styles from './team.module.css'
import { useTranslation } from 'react-i18next';



export default function Team () {

  const { t } = useTranslation()

    return (
        <section className={styles.main} id='team'>
            <h1>{t('team-title')}</h1>
            <p className={styles.mp}>{t('team-intro')}</p>
            <div className={styles.list}>
              <div className={styles.card}>
                <div className={styles.block}>
                  <div className={styles.logo}>
                      <img src='' alt='img'/>  
                  </div>  
                  <div className={styles.info}>
                    <h3>{t('t1-name')}</h3>
                    <p>{t('t1-desc')}</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.block}>
                  <div className={styles.logo}>
                      <img src='' alt='img'/>  
                  </div>  
                  <div className={styles.info}>
                    <h3>{t('t2-name')}</h3>
                    <p>{t('t2-desc')}</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.block}>
                  <div className={styles.logo}>
                      <img src='' alt='img'/>  
                  </div>  
                  <div className={styles.info}>
                    <h3>{t('t3-name')}</h3>
                    <p>{t('t3-desc')}</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}