
import initTranslations from '../i18n';
import TranslationsProvider from '../components/TranslationsProvider';
import styles from '../page.module.css'
import App from '../components/App';


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