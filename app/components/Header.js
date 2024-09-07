"use client"
import LanguageChanger from "./LanguageChanger";
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 

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
        <div className={styles.header} id='home'>
            <div className={styles.contact}>
            <span className={styles.ico}>{phone}</span><p>{'406 967 (727) 40+'}</p>
            <span className={styles.ico}>{envelope}</span><p>{'contact@alinbiz.ro '}</p>
            </div>
            <div 
             className={styles.lang}
            >
                <LanguageChanger/>
            </div>
        </div>
    )
        
    
}