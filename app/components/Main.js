'use client'
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ModalContext } from './App';

import styles from './main.module.css'

export default function Main () {

  const { t } = useTranslation()
  const { setModal } = useContext(ModalContext)

    return (
        <div className='wrap bg1' id='home'>
        <section className={styles.main}>
            <h1>{t('main-title')}</h1>
            <p>{t('main-article')}</p>    
            <button 
              className={styles.glow}
              onClick={()=>setModal('flex')}
            >{t('call-us')}</button>                  
        </section> 
        </div>
    )
}