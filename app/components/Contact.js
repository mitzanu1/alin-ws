'use client'

import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContext } from './App';

import styles from './contact.module.css'


export default function Contact () {

  const { setModal } = useContext(ModalContext)
  const { t } = useTranslation()

    return (
      <div className='wrap bg5' id='contact'>
        <section className={styles.main} >
          <h1>{t('contact-title')}</h1>
          <p>{t('contact-det')}</p>
          <button
            onClick={()=>setModal('flex')}
          >{t('contact-btn')}
          </button>
        </section>
      </div>
    )
}


