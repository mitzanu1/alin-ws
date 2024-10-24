'use client'
import { useTranslation } from 'react-i18next';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './portfolio.module.css'

// import  Carousel  from './Carousel';

export default function Portfolio () {

  const { t } = useTranslation()

    return (
        <>
        <div className='wrap bg3' id='portfolio'>
        <section className={styles.main} >
            <h1>{t('pf-title')}</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={`${styles.img} ${styles.img0}`}></div>
                    <div className={styles.desc}>
                        <h4  className={styles.b1}>{t('pf1-name')}</h4>
                        <p>{t('pf1-desc')}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles.img} ${styles.img1}`}></div>
                    <div className={styles.desc}>
                        <h4  className={styles.b2}>{t('pf2-name')}</h4>
                        <p>{t('pf2-desc')}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles.img} ${styles.img2}`}></div>
                    <div className={styles.desc}>
                        <h4  className={styles.b3}>{t('pf3-name')}</h4>
                        <p>{t('pf3-desc')}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={`${styles.img} ${styles.img3}`}></div>
                    <div className={styles.desc}>
                        <h4  className={styles.b4}>{t('pf4-name')}</h4>
                        <p>{t('pf4-desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
        <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={490}
            totalSlides={4}
            dir='rtl'
            currentSlide={0}
        >
            <Slider className={styles.slider}>
                <Slide 
                    index={0}
                    className={styles.slide}
                >
                    <div className={styles.card}>
                            <div className={`${styles.img} ${styles.img0}`}></div>
                            <div className={styles.desc}>
                                <h4 className={styles.b1}>{t('pf1-name')}</h4>
                                <p>{t('pf1-desc')}</p>
                            </div>
                    </div>
                </Slide>
                <Slide 
                    index={1}
                    className={styles.slide}
                >
                    <div className={styles.card}>
                            <div className={`${styles.img} ${styles.img1}`}></div>
                            <div className={styles.desc}>
                                <h4 className={styles.b2}>{t('pf2-name')}</h4>
                                <p>{t('pf2-desc')}</p>
                            </div>
                    </div>
                </Slide>
                <Slide 
                    index={2}
                    className={styles.slide}
                >
                    <div className={styles.card}>
                            <div className={`${styles.img} ${styles.img2}`}></div>
                            <div className={styles.desc}>
                                <h4  className={styles.b3}>{t('pf3-name')}</h4>
                                <p>{t('pf3-desc')}</p>
                            </div>
                    </div>
                </Slide>
                <Slide 
                    index={3}
                    className={styles.slide}
                >
                    <div className={styles.card}>
                            <div className={`${styles.img} ${styles.img3}`}></div>
                            <div className={styles.desc}>
                                <h4 className={styles.b4}>{t('pf4-name')}</h4>
                                <p>{t('pf4-desc')}</p>
                            </div>
                    </div>
                </Slide>
            </Slider>
            <div className={styles.sldBtn}>
                <ButtonNext className={styles.crsBtn}>{'<'}</ButtonNext>
                <ButtonBack className={styles.crsBtn}>{'>'}</ButtonBack>
            </div>
        </CarouselProvider>
    </>
    )
}