import React from "react";
import "./APISection.css";

class APISection extends React.Component {
  render() {
    return (
      <div>
        <div className="api_section">
          {/*png*/}
          <img
            className="api_section_top_left_image"
            src="/img/api-section/img-bg-2.png"
            srcSet="/img/api-section/img-bg-2@2x.png 2x, /img/api-section/img-bg-2@3x.png 3x"
            alt="img-bg-2"
          />
          <img
            className="api_section_bottom_right_image"
            src="/img/api-section/img-bg-1.png"
            srcSet="/img/api-section/img-bg-1@2x.png 2x, /img/api-section/img-bg-1@3x.png 3x"
            alt="img-bg-1"
          />
          <p className="api_section_title">API 문서</p>
          <p className="api_section_subtitle">
            한컴의 오픈 API를 사용해서 창의적인 제품을 만들어보세요.
          </p>
          <div className="api_section_product_container">
            <div className="api_section_product_box">
              <img
                className="main_image"
                src="/img/api-section/img-api-01.jpg"
                srcSet="/img/api-section/img-api-01@2x.jpg 2x, /img/api-section/img-api-01@3x.jpg 3x"
                alt="img-api-01"
              />
              <p className="title">제품1</p>
              <p className="description">
                대표 제품 API 문서 소개 최대 3줄
                <br /> 텍스트 영역 대표 제품 API 문서
                <br /> 소개 최대 3줄 텍스트 영역입니다.
              </p>
              <div className="link_box">
                <p className="link_title">자세히 보기</p>
                <img
                  className="link_image"
                  src="/img/api-section/icon-ic-16-arrow-right.svg"
                  alt="icon-ic16-arrow-right"
                />
              </div>
            </div>
            <div className="api_section_product_box">
              <img
                className="main_image"
                src="/img/api-section/img-api-02.jpg"
                srcSet="/img/api-section/img-api-02@2x.jpg 2x, /img/api-section/img-api-02@3x.jpg 3x"
                alt="img-api-02"
              />
              <p className="title">제품2</p>
              <p className="description">
                또한 ellipsis 속성을 통해 한 <br /> 줄에서 정해진 너비의
                글자수가 넘어간다면 "..." 처리가 됩니다.
                <br /> 정해진 너비 이상으로 글을 작성해보겠습니다. 넘어가나요?
              </p>
              <div className="link_box">
                <p className="link_title">자세히 보기</p>
                <img
                  className="link_image"
                  src="/img/api-section/icon-ic-16-arrow-right.svg"
                  alt="icon-ic16-arrow-right"
                />
              </div>
            </div>
            <div className="api_section_product_box">
              <img
                className="main_image"
                src="/img/api-section/img-api-03.jpg"
                srcSet="/img/api-section/img-api-03@2x.jpg 2x, /img/api-section/img-api-03@3x.jpg 3x"
                alt="img-api-03"
              />
              <p className="title">제품3</p>
              <p className="description">
                word-wrap 속성을 사용하여 <br /> 정해진 너비 외의 글자는 단어
                단위로
                <br /> "..."처리가 됩니다.
              </p>
              <div className="link_box">
                <p className="link_title">자세히 보기</p>
                <img
                  className="link_image"
                  src="/img/api-section/icon-ic-16-arrow-right.svg"
                  alt="icon-ic16-arrow-right"
                />
              </div>
            </div>
            <div className="api_section_product_box">
              <img
                className="main_image"
                src="/img/api-section/img-api-04.jpg"
                srcSet="/img/api-section/img-api-04@2x.jpg 2x, /img/api-section/img-api-04@3x.jpg 3x"
                alt="img-api-04"
              />
              <p className="title">제품4</p>
              <p className="description">
                이제 원하는 제품의
                <br /> 설명을 작성해보세요.
                <br /> 버그나 문의사항은 프론트엔드 개발자에게 문의해주세요.
              </p>
              <div className="link_box">
                <p className="link_title">자세히 보기</p>
                <img
                  className="link_image"
                  src="/img/api-section/icon-ic-16-arrow-right.svg"
                  alt="icon-ic16-arrow-right"
                />
              </div>
            </div>
          </div>
          <div className="api_section_all_products_link_box">
            <p className="api_section_all_products_title">전체 제품 보기</p>
          </div>
        </div>
      </div>
    );
  }
}

export default APISection;
