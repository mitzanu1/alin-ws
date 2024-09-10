'use client'

import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContext } from './App';

import styles from './contactForm.module.css'

export default function ContactForm() {
    const {modal, setModal} = useContext(ModalContext)
    const { t } = useTranslation()

    return (
        <div className={styles.wrap}
            style={{display:modal}}
            onClick={()=>{setModal('none')}}
        >
        <form className={styles.main}
            onClick={(e)=>{e.stopPropagation()}}
        >
            <p>{t('form-head')}</p>
            <p>{t('form-head-email')}: <span>contact@alinbiz.ro</span></p>
            <div className={styles.detailsBox}>
                <input 
                  placeholder={t('form-name')}
                />
                <input 
                  placeholder={t('form-email')}
                />

            </div>
            <input 
                placeholder={t('form-subject')}
            />
            <textarea 
                placeholder={t('form-message')}
                rows={7}
            />
            <button
                className={styles.btn}
            >{t('send-message')}</button>
            <p className={styles.close}
                onClick={()=>setModal('none')}
            >
                {t('form-close')}</p>
        </form>
        </div>
    )
}