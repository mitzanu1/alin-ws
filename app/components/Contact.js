'use client'
import styles from './contact.module.css'
import ContactForm from './ContactForm'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 


export default function Contact () {

  const { t } = useTranslation()

  const phone = <FontAwesomeIcon 
  icon={faPhone} 
  style={{width:'40px', height:'40px'}}
  color="teal"
  />
const envelope = <FontAwesomeIcon 
  icon={faEnvelope}
  style={{width:'40px', height:'40px'}}
  color="teal"
  />

    return (
        <section className={styles.main} id='contact'>
            <div className={styles.contact}>
              <h4>{t('contact-det')}</h4>
              <h1>{t('contact-title')}</h1>
              <p className={styles.mp}>{t('contact-desc')}</p>  
              <div className={styles.container}> 
                  <div className={styles.dets}>
                    <div>{phone}</div>
                    <div className={styles.detsDesc}>
                      <p><strong>:{t('our-phone')}</strong></p>
                      <p>406 967 (727) 40 +</p>
                    </div>
                  </div>             
                  <div className={styles.dets}>
                     <div>{envelope}</div>
                     <div className={styles.detsDesc}>
                       <p><strong>:{t('our-email')}</strong></p>
                       <p>contact@alinbiz.com</p>
                     </div>
                   </div>
                </div>             
            </div>
            <div className={styles.form}>
              <ContactForm />
            </div>
        </section>
    )
}