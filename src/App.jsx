import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./sass/style.css"
import Header from './components/Header';
import Videobackground from './pages/Videobackground';
import Howitworks from './pages/Howitworks';
import About from './pages/About';
import Careers from './pages/Careers';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <>
      <Header />
      <Videobackground />
      <Howitworks />
      <About />
      <Careers />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App