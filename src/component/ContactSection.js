import React from "react";
import "./ContactSection.css";

class ContactSection extends React.Component {
  render() {
    return (
      <div>
        <div className="contact_section">
          <div className="contact_section_box" style={{ left: "17.7604%" }}>
            <img
              className="image"
              src="/img/contact-section/img-career.png"
              srcSet="/img/contact-section/img-career@2x.png 2x, /img/contact-section/img-career@3x.png 3x"
              alt="img-career"
            />
            <p className="title">인재 채용</p>
            <div className="subtitle_box">
              <p className="subtitle">
                한컴과 함께 성장할 개발자를 기다립니다!
              </p>
              <img
                className="subtitle_image"
                src="/img/contact-section/icon-ic-24-arrow-right.png"
                srcSet="/img/contact-section/icon-ic-24-arrow-right@2x.png 2x, /img/contact-section/icon-ic-24-arrow-right@3x.png 3x"
                alt="img-career"
              />
            </div>
          </div>
          <div className="contact_section_box" style={{ left: "54.2188%" }}>
            <img
              className="image"
              src="/img/contact-section/img-qna.png"
              srcSet="/img/contact-section/img-qna@2x.png 2x, /img/contact-section/img-qna@3x.png 3x"
              alt="img-qna"
            />
            <p className="title">비즈니스 문의</p>
            <div className="subtitle_box">
              <p className="subtitle">
                개발자센터에 더 궁금하신 점이 있으신가요?
              </p>
              <img
                className="subtitle_image"
                src="/img/contact-section/icon-ic-24-arrow-right.png"
                srcSet="/img/contact-section/icon-ic-24-arrow-right@2x.png 2x, /img/contact-section/icon-ic-24-arrow-right@3x.png 3x"
                alt="img-career"
              />
            </div>
          </div>
          <div className="contact_section_back_to_top_button">
            <img
              className="image"
              src="/img/contact-section/ic-top.png"
              srcSet="/img/contact-section/ic-top@2x.png 2x, /img/contact-section/ic-top@3x.png 3x"
              alt="ic-top"
            />
          </div>
          <div className="right_section"></div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
