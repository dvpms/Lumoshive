import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import ServicesContainer from "./containers/ServicesContainer";
import PortfolioContainer from "./containers/PortfolioContainer";
import ContactContainer from "./containers/ContactContainer";
import LayoutComponent from "./components/Layout/LayoutComponent";
import BlogsContainer from "./containers/BlogsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import metaData from "./utils/metaData";

function App() {
  console.log(metaData)
  return (
    <Router>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomeContainer metaData={metaData.home} />} />
          <Route path="/about" element={<AboutContainer metaData={metaData.about}/>} />
          <Route path="/our-services" element={<ServicesContainer metaData={metaData.services}/>} />
          <Route path="/blog" element={<BlogsContainer metaData={metaData.blog}/>} />
          <Route path="/portfolio" element={<PortfolioContainer metaData={metaData.portfolio}/>} />
          <Route path="/contact" element={<ContactContainer metaData={metaData.contact}/>} />
        </Routes>
      </LayoutComponent>
    </Router>
  );
}

export default App;
