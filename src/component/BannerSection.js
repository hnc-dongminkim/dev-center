import React from "react";
import "./BannerSection.css";

class BannerSection extends React.Component {
  render() {
    return (
      <div>
        <div className="banner">
          <img
            className="image_container"
            src="/img/banner-section/banner-main.png"
            srcSet="/img/banner-section/banner-main@2x.png 2x, /img/banner-section/banner-main@3x.png 3x"
            alt="banner_main"
          />
          <p className="develop_with_hancom">
            <span className="text_style_1">Develop</span> with Hancom
          </p>
          <p className="below_develop_with_hancom">
            한글과컴퓨터의 다양하고{" "}
            <span className="text_style_1">차별화된 기술</span>을 편리하게
            제공합니다.
          </p>
        </div>
      </div>
    );
  }
}

export default BannerSection;
