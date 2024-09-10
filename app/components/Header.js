"use client"
import LanguageChanger from "./LanguageChanger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 

import styles from './header.module.css'

export default function Header() {

    const phone = <FontAwesomeIcon 
        icon={faPhone} 
        style={{width:'15px', height:'15px'}}
        color="white"
        />
    const envelope = <FontAwesomeIcon 
        icon={faEnvelope}
        style={{width:'15px', height:'15px'}}
        color="white"
        />

    return (
        <div className={styles.header}>
            <div className={styles.contact}>
              <div className={styles.wrap}>
                <span className={styles.ico}>{phone}</span>
                <p>{'406 967 (727) 40+'}</p>
              </div>
              <div className={styles.wrap}>
                 <span className={styles.ico}>{envelope}</span>
                 <p>{'contact@alinbiz.ro '}</p>
              </div>
            </div>
            <div 
             className={styles.lang}
            >
                <LanguageChanger/>
            </div>
        </div>
    )
        
    
}