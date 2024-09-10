'use client'

import { useTranslation } from 'react-i18next';

import styles from './techStack.module.css'

export default function TechStack() {

  const { t } = useTranslation()

    return (
        <div className='wrap bg2' id='techStach'>
        <section className={styles.main} >
            <h1>{t('ts-title')}</h1>
            <article className={styles.list}>
              <ul>
                <li>
                  <img src="ts.png" alt='TypeScript'  />
                  <p>TypeScript</p>
                </li>
                <li>
                  <img src="js.png" alt='JavaScript'  />
                  <p>JavaScript</p>
                </li>
                <li>
                  <img src="react.png" alt='React'  />
                  <p>React</p>
                </li>
                <li>
                  <img src="njs.png" alt='Next.js'  />
                  <p>Next.js</p>
                </li>
                <li>
                  <img src="gby.png" alt='Gatsby'  />
                  <p>Gatsby</p>
                </li>
                <li>
                  <img src="css.png" alt='HTML/CSS'  />
                  <p>HTML/CSS</p>
                </li>      
              </ul>              
            </article>
        </section>
        </div>
    )
}