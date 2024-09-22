'use client'
import { useTranslation } from 'react-i18next';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './portfolio.module.css'

import  Carousel  from './Carousel';

export default function Portfolio () {

  const { t } = useTranslation()

    return (
        <>
        <div className='wrap bg3' id='portfolio'>
        <section className={styles.main} >
            <h1>{t('pf-title')}</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <a href='https://www.avochat.net/' target='_blank'>
                    <div className={styles.img}></div>
                    <div className={styles.desc}>
                        <h4>{t('pf1-name')}</h4>
                        <p>{t('pf1-desc')}</p>
                    </div>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='https://www.avochat.net/' target='_blank'>
                    <div className={styles.img}></div>
                    <div className={styles.desc}>
                        <h4>{t('pf1-name')}</h4>
                        <p>{t('pf1-desc')}</p>
                    </div>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='https://www.avochat.net/' target='_blank'>
                    <div className={styles.img}></div>
                    <div className={styles.desc}>
                        <h4>{t('pf1-name')}</h4>
                        <p>{t('pf1-desc')}</p>
                    </div>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='https://www.avochat.net/' target='_blank'>
                    <div className={styles.img}></div>
                    <div className={styles.desc}>
                        <h4>{t('pf1-name')}</h4>
                        <p>{t('pf1-desc')}</p>
                    </div>
                    </a>
                </div>
            </div>
        </section>
    </div>
        <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={420}
            totalSlides={3}
        >
            <Slider>
                <Slide 
                    index={0}
                    className={styles.slide}
                >
                    <div className={styles.card}>
                        <a href='https://www.avochat.net/' target='_blank'>
                            <div className={styles.img}></div>
                            <div className={styles.desc}>
                                <h4>{t('pf1-name')}</h4>
                                <p>{t('pf1-desc')}</p>
                            </div>
                        </a>
                    </div>
                </Slide>
                <Slide 
                    index={1}
                    className={styles.slide}
                >
                    <div className={styles.card}>
                        <a href='https://www.avochat.net/' target='_blank'>
                            <div className={styles.img}></div>
                            <div className={styles.desc}>
                                <h4>{t('pf1-name')}</h4>
                                <p>{t('pf1-desc')}</p>
                            </div>
                        </a>
                    </div>
                </Slide>
                <Slide 
                    index={2}
                    className={styles.slide}
                >
                    <div className={styles.card}>
                        <a href='https://www.avochat.net/' target='_blank'>
                            <div className={styles.img}></div>
                            <div className={styles.desc}>
                                <h4>{t('pf1-name')}</h4>
                                <p>{t('pf1-desc')}</p>
                            </div>
                        </a>
                    </div>
                </Slide>
            </Slider>
            <div className={styles.sldBtn}>
                <ButtonBack className={styles.crsBtn}>{'<'}</ButtonBack>
                <ButtonNext className={styles.crsBtn}>{'>'}</ButtonNext>
            </div>
        </CarouselProvider>
    </>
    )
}