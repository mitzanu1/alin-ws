import { Inter } from "next/font/google";
import "./globals.css";
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alin's WS",
  description: "Awaiting description",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}