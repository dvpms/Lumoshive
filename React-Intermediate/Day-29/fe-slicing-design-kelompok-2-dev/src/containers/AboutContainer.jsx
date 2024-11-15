import React from "react";
import About from "../components/About/AboutComponent";
import AboutUS from "../components/AboutUs/AboutUsComponent";
import Card from "../components/Card/CardComponent";
import { leadersData } from "../utils/data";
import BannerComponent from "../components/Banner/BannerComponent";
import HelmetComponent from "../components/helmetComponent";

const AboutContainer = ({ metaData}) => {
  return (
    <div>
      <HelmetComponent metaData={metaData} />
      <About title="About" subtitle="Home / About" />
      <AboutUS />
      <Card leadersData={[...leadersData, ...leadersData]} />
      <BannerComponent />
    </div>
  );
};

export default AboutContainer;
