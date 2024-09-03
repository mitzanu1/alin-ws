'use client'
import styles from './techStack.module.css'
import { useTranslation } from 'react-i18next';

export default function TechStack() {

  const { t } = useTranslation()

    return (
        <section className={styles.main} id='techStach'>
            <h1>{t('ts-title')}</h1>
            <article className={styles.list}>
                <div>
                  <img src="ts.png" alt='TypeScript'  />
                  <p>TypeScript</p>
                </div>
                <div>
                  <img src="js.png" alt='JavaScript'  />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src="react.png" alt='React'  />
                  <p>React</p>
                </div>
                <div>
                  <img src="njs.png" alt='Next.js'  />
                  <p>Next.js</p>
                </div>
                <div>
                  <img src="gby.png" alt='Gatsby'  />
                  <p>Gatsby</p>
                </div>
                <div>
                  <img src="css.png" alt='HTML/CSS'  />
                  <p>HTML/CSS</p>
                </div>                    
            </article>
        </section>
    )
}