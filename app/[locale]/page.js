import initTranslations from '../i18n';
import TranslationsProvider from '../components/TranslationsProvider';
import styles from '../page.module.css'
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Main from '../components/Main';
import TechStack from '../components/TechStack';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className={styles.main}>
        <Header />
        <Navigation />
        <Main />
        <TechStack />
        <Team />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </TranslationsProvider>
  );
}