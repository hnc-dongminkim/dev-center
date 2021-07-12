import React from "react";
import {
  MenuBar,
  BannerSection,
  APISection,
  BlogSection,
  ContactSection,
  Footer,
} from "./component/ComponentIndex";

class DevelopersIntro extends React.Component {
  render() {
    return (
      <div>
        <MenuBar />
        <BannerSection />
        <APISection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default DevelopersIntro;
