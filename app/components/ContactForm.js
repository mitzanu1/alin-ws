'use client'

import React, { useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContext } from './App';
import emailjs from '@emailjs/browser';
import styles from './contactForm.module.css'

export default function ContactForm() {
    const {modal, setModal} = useContext(ModalContext)
    const { t } = useTranslation()

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_yu4r0jq', 'template_9xjif21', form.current, {
          publicKey: 'l9SHxUEvWfYQLlppI',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <div className={styles.wrap}
            style={{display:modal}}
            onClick={()=>{setModal('none')}}
        >
        <form 
            ref={form}
            onSubmit={sendEmail}
            className={styles.main}
            onClick={(e)=>{e.stopPropagation()}}
        >
            <h6 className={styles.close}
                onClick={()=>setModal('none')}
            >
              ᙭</h6>
            <p>{t('form-head')}</p>
            <p>{t('form-head-email')}: <span>contact@alinbiz.ro</span></p>
            <div className={styles.detailsBox}>
                <input 
                  type="text"
                  name="user_name"
                  placeholder={t('form-name')}
                />
                <input
                  type="email" 
                  name="user_email" 
                  placeholder={t('form-email')}
                />

            </div>
            <input 
                type='text'
                name='user_subject'
                placeholder={t('form-subject')}
            />
            <textarea 
                name='message'
                placeholder={t('form-message')}
                rows={7}
            />
            <button
                className={styles.btn}
                type='submit'
                onClick={()=>setModal('none')}
            >{t('send-message')}</button>
            
        </form>
        </div>
    )
}