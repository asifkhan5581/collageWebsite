import React from "react";
import TopHeader from "../../Componant/Navbar/TopHeader/Topheader";
import Navbar from "../../Componant/Navbar/Navbar";
import Hero from "../../Componant/Hero/Hero";
import OfferSec from "../../Componant/OfferSec/OfferData";
import Course from "../../Componant/Course/Course";
import ChoseUs from "../../Componant/ChoseUs/ChoseUs";
import Event from "../../Componant/Events/EventData";
import Gallery from "../../Componant/Gallery/Gallery";
import Reivews from "../Reivews/Reivews";
import Footer from "../../Componant/Footer/Footer";
import AboutHss from "../AboutHss/AboutHss";
function Home() {
  return (
    <>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutHss></AboutHss>
      <OfferSec></OfferSec>
      <Course></Course>
      <ChoseUs></ChoseUs>
      <Event></Event>
      <Gallery></Gallery>
      <Reivews></Reivews>
      <Footer></Footer>
    </>
  );
}

export default Home;
