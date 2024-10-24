
import React from 'react';
import initTranslations from './i18n';
import TranslationsProvider from './components/TranslationsProvider'
import App from './components/App';
import styles from './page.module.css'

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }) {
  
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider 
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main 
        dir='ltr'
        className={styles.main}>
        <App />
      </main>
    </TranslationsProvider>
  );
}
