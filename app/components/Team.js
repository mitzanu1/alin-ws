'use client'

import { useTranslation } from 'react-i18next';

import styles from './team.module.css'



export default function Team () {

  const { t } = useTranslation()

    return (
      <div className='wrap bg4' id='team'>
        <section className={styles.main} >
            <h1>{t('team-title')}</h1>
            <p className={styles.mp}>{t('team-intro')}</p>
            <div className={styles.list}>
              <div className={styles.card}>
                  <div className={styles.det}>
                    <h4>{t('t1-name')}</h4>
                    <p>CO-FOUNDER</p>
                  </div>
                <div className={styles.desc}>
                  <p>{t('t1-desc')}</p>
                </div>
              </div>
              <div className={styles.card}>
                  <div className={styles.det}>
                    <h4>{t('t2-name')}</h4>
                    <p>CO-FOUNDER</p>
                  </div>
                <div className={styles.desc}>
                  <p>{t('t2-desc')}</p>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
}