import React from "react";
import Navbar from "../../Componant/Navbar/Navbar";
import Footer from "../../Componant/Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";
import Topheader from "../../Componant/Navbar/TopHeader/Topheader";
function Contact() {
  return (
    <>
      <Topheader></Topheader>
      <Navbar></Navbar>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
}

export default Contact;
