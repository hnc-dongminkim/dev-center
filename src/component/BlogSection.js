import React from 'react';
import './BlogSection.css'

class BlogSection extends React.Component {
    render() {
      return (
        <div>
            <div className="blog_section">
            <p className="blog_section_title">블로그</p>
            <div className="blog_section_top_line"></div>
            <div className="blog_section_post_container">
                <div className="box">
                <div className="title">최신 블로그 포스트 제목 최신 블로그 포스트 제목 영역입니다.</div>
                <div className="content">최대 1줄 블로그 본문 내용 영역입니다. 최대 1줄 블로그 본문 내용 영역입니다. 최대 1줄 블로그 본문 내용 영역입니다.</div>
                <img className="image"
                        src="/img/blog-section/octobi-wan.jpg" alt="octocat"/>
                <div className="name">octobi-wan</div>
                <div className="date">2021. 05. 12</div>
                </div>
                <div className="line"></div>
                <div className="box">
                <div className="title">최신 블로그 포스트 제목 최신 블로그 포스트 제목 영역입니다.</div>
                <div className="content">최대 1줄 블로그 본문 내용 영역입니다. 최대 1줄 블로그 본문 내용 영역입니다. 최대 1줄 블로그 본문 내용 영역입니다.</div>
                <img className="image"
                        src="/img/blog-section/octobi-wan.jpg" alt="octocat"/>
                <div className="name">octobi-wan</div>
                <div className="date">2021. 05. 12</div>
                </div>
                <div className="line"></div>
                <div className="box">
                <div className="title">최신 블로그 포스트 제목 최신 블로그 포스트 제목 영역입니다.</div>
                <div className="content">최대 1줄 블로그 본문 내용 영역입니다. 최대 1줄 블로그 본문 내용 영역입니다. 최대 1줄 블로그 본문 내용 영역입니다.</div>
                <img className="image"
                        src="/img/blog-section/octobi-wan.jpg" alt="octocat"/>
                <div className="name">octobi-wan</div>
                <div className="date">2021. 05. 12</div>
                </div>
                <div className="line"></div>
            </div>
            <div className="blog_section_more_post_box">
                <p className="blog_section_more_post_title">더보기</p>
            </div>
            </div>
        </div>
      );
    }
}

export default BlogSection;