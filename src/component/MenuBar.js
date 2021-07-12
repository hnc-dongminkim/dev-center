import React from "react";
import "./MenuBar.css";

class MenuBar extends React.Component {
  render() {
    return (
      <div>
        {/* */}
        {/* zIndex 중간에 다른 태그들이 추가 될 수도 있으니 10단위로 증감*/}
        {/* public/img 경로 */}
        <div className="menu_bar">
          <img
            className="menu_bar_logo"
            src="/img/menu-bar/bi-white.png"
            srcSet="/img/menu-bar/bi-white@2x.png, /img/menu-bar/bi-white@3x.png"
            alt="bi-white"
          />
          <ul className="menu_bar_link_list">
            <li>
              <a className="menu_bar_link" href="{{ '/' | relative_url }}">
                API 문서
              </a>
            </li>
            <li>
              <a className="menu_bar_link" href="{{ '/' | relative_url }}">
                블로그
              </a>
            </li>
            <li>
              <a className="menu_bar_link" href="{{ '/' | relative_url }}">
                커뮤니티
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuBar;
