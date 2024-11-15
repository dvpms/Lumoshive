import React from "react";
import BlogTopComponent from "../components/BlogTop/BlogTopComponent";
import BlogBottomComponent from "../components/BlogBottom/BlogBottomComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import AboutComponent from "../components/About/AboutComponent";
import HelmetComponent from "../components/helmetComponent";

const BlogsContainer = ({metaData}) => {
  return (
    <div>
      <HelmetComponent metaData={metaData} />
      <AboutComponent title="Blogs" subtitle="Home / Blogs" />
      <TitlePageComponent title={"Our Blog"} description={"Latest Post"} />
      <BlogTopComponent />
      <BlogBottomComponent />
      <BlogBottomComponent />
      <BlogBottomComponent />
    </div>
  );
};

export default BlogsContainer;
