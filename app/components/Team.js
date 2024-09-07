'use client'
import styles from './team.module.css'
import { useTranslation } from 'react-i18next';



export default function Team () {

  const { t } = useTranslation()

    return (
      <div className='wrap bg4'>
        <section className={styles.main} id='team'>
            <h1>{t('team-title')}</h1>
            <p className={styles.mp}>{t('team-intro')}</p>
            <div className={styles.list}>
              <div className={styles.card}>
                <div className={styles.desc}>
                  <p>{t('t1-desc')}</p>
                </div>
                <div className={styles.personal}>
                  <div className={styles.img}>
                    <img  src='team1.png' alt='Alin'/>
                  </div>
                  <div className={styles.det}>
                    <h4>{t('t1-name')}</h4>
                    <p>FOUNDER & CEO</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.desc}>
                  <p>{t('t2-desc')}</p>
                </div>
                <div className={styles.personal}>
                  <div className={styles.img}>
                    <img src='team2.png' alt='Mihai Babet'/>
                  </div>
                  <div className={styles.det}>
                    <h4>{t('t2-name')}</h4>
                    <p>FOUDER & CEO</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
}