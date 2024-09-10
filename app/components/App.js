'use client'

import React, { createContext } from 'react';

import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";
import Team from "./Team";
import TechStack from "./TechStack";


export const ModalContext = createContext(null)


export default function App () {

    const [modal, setModal] = React.useState('none')
    const value = { modal, setModal}

    return (
     <>
      <ModalContext.Provider value={value}>
        <Header />
        <Navigation />
        <Main />
        <TechStack />
        <Portfolio />
        <Team />
        <Contact />
        <ContactForm/>
        <Footer />
      </ModalContext.Provider>
     </>
    )
}