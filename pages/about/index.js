import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import About4 from "../../components/about4/about4";
import Navbar2 from "../../components/Navbar2/Navbar2";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import FunFact from "../../components/FunFact";
import ProjectSectionS2 from "../../components/ProjectSectionS2/ProjectSectionS2";
import CtaSection2 from "../../components/CtaSection2/CtaSection2";
import BlogSection2 from "../../components/BlogSection2/BlogSection2";

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <About4 abClass={"section-padding"} />
      <FunFact />
      <ProjectSectionS2 prClass={"section-padding"} />
      <CtaSection2 />
      <BlogSection2 />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
