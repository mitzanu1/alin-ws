import { Roboto, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';

export const roboto = Roboto({ 
  subsets: ["latin"], 
  weight:['300', '500', '900'],
  display:'swap',
  variable:'--font-roboto'
});

export const source_serif_4 = Source_Serif_4({ 
  subsets: ["latin"], 
  weight:['300', '500', '900'],
  display:'swap',
  variable:'--font-source-serif-4'
});

export const metadata = {
  title: "Bit Genesys",
  description: "BitGenesys provides innovative, user-focused web and mobile applications that empower businesses to grow. Our vision is to transform ideas into seamless digital experiences through cutting-edge technology and strategic collaboration",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={[`${source_serif_4.variable} ${roboto.variable}`]}>
        {children}
      </body>
    </html>
  );
}