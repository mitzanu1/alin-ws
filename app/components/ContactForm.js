'use client'

import styles from './contactForm.module.css'
import { useTranslation } from 'react-i18next';



export default function ContactForm() {

  const { t } = useTranslation()

    return (
        <form className={styles.main}>
            <p>{t('form-head')}</p>
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
        </form>
    )
}