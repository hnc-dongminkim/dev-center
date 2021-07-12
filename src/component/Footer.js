import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer_link_box">
            <p className="link">이용약관</p>
            <p className="link">개인정보처리방침</p>
            <p className="link">전자금융거래이용약관</p>
          </div>
          <div className="footer_address_box">
            <div className="title" style={{ lineHeight: 1.67 }}>
              경기도 성남시 분당구 대왕판교로 644번길 49 한컴타워
              <br />
              사업자등록번호 107-81-52230 ㅣ 통신판매신고번호 2012-경기성남-1092
              ㅣ (주)한글과컴퓨터 대표자 변성준
            </div>
            <div className="title" style={{ lineHeight: 1.83 }}>
              Copyrights ©Hancom Inc. All rights reserved.
            </div>
          </div>
          <div className="footer_family_site">
            <p className="title">Family site</p>
            <img
              className="image"
              src="/img/footer/ic-16-open.png"
              srcSet="/img/footer/ic-16-open@2x.png 2x, /img/footer/ic-16-open@3x.png 3x"
              alt="ic-16-open"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
