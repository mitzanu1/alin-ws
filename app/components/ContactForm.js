'use client'

import React, { useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContext } from './App';
import emailjs from '@emailjs/browser';
import styles from './contactForm.module.css'

export default function ContactForm() {
  const { modal, setModal } = useContext(ModalContext)
  const [popup, setPopup] = React.useState('none')
  const [popText, setPopText] = React.useState('')
  const [bgc, setBgc] = React.useState('rgb(0, 216, 0)')
  const [disabled, setDisabled] = React.useState(false)
  const { t } = useTranslation()

  const form = useRef();

  const sendEmail = async(e) => {
    e.preventDefault();
    setDisabled(true)
    await emailjs
      .sendForm('service_dcu2aqg', 'template_9xjif21', form.current, {
        publicKey: 'l9SHxUEvWfYQLlppI',
      })
      .then(
        () => {
          setBgc('rgb(0, 216, 0)')
          setPopText(t('alert-succes'))
          setPopup('flex')
        },
        (error) => {
          setBgc('rgb(255, 0, 76)')
          setPopText(t('alert-error'))
          setPopup('flex')
          console.log('FAILED...', error.text);
        },
      );
      setDisabled(false)
  };

  return (
    <div className={styles.wrap}
      style={{ display: modal }}
      onClick={() => {
        setPopup('none')
        setModal('none')
      }}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className={styles.main}
        onClick={(e) => { e.stopPropagation() }}
      >
        <h6
          className={styles.close}
          onClick={() => {
            setPopup('none')
            setModal('none')
          }}
        >
          ᙭</h6>
        <p>{t('form-head')}</p>
        <p>{t('form-head-email')}: <span>contact@bitgenesys.com</span></p>
        <div className={styles.detailsBox}>
          <input
            type="text"
            name="user_name"
            placeholder={t('form-name')}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder={t('form-email')}
            required
          />

        </div>
        <input
          type='text'
          name='user_subject'
          placeholder={t('form-subject')}
          required
        />
        <textarea
          name='message'
          placeholder={t('form-message')}
          rows={7}
          required
        />
        <div
          style={{ display: popup, backgroundColor: bgc }}
          className={styles.popup}
          onClick={() => {
            setPopup('none')
            setModal('none')
          }}
        >
          <p>{popText}</p>
        </div>
        <button
          className={styles.btn}
          style={{ display: popup === 'flex' ? 'none' : 'flex' }}
          type='submit'
          disabled={disabled}
        >{t('send-message')}</button>
      </form>
    </div>
  )
}