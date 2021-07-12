import React from "react";
import "./BlogSection.css";
import RssParser from "rss-parser";
const RSS_FEED_URL =
  "https://hancom-io.github.io/silver-broccoli-urban-fiesta/feed.xml";

class BlogSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentThreePosts: [],
    };
  }

  async componentDidMount() {
    const rssParser = new RssParser();
    //RSS feed 받아오기
    const feed = await rssParser.parseURL(RSS_FEED_URL);
    //최신 블로그 포스트 3개만 객체 복사
    this.setState({ recentThreePosts: feed.items.slice(0, 3) });
  }

  render() {
    const recentThreePosts = this.state.recentThreePosts;
    //this.state.recentThreePosts가 비어있지 않은 경우
    const showPosts = recentThreePosts.map((post) => (
      <div key={post.id}>
        <div className="box">
          <div className="title">{post.title}</div>
          <div className="content">{post.summary}</div>
          <img
            className="image"
            src="/img/blog-section/octobi-wan.jpg"
            alt="octocat"
          />
          <div className="name">{post.author}</div>
          <div className="date">{post.pubDate.substring(0, 10)}</div>
        </div>
        <div className="line" />
      </div>
    ));
    //this.state.recentThreePosts가 비어있는 경우
    const emptyPosts = (
      <div>
        <div className="box">
          <div className="title">😯표시할 블로그 포스트가 없습니다.😯</div>
          <div className="content">블로그 포스트를 추가해주세요~</div>
          <img
            className="image"
            src="/img/blog-section/octobi-wan.jpg"
            alt="octobi-wan"
          />
          <div className="name">octobi-wan</div>
          <div className="date">0000-00-00</div>
        </div>
        <div className="line" />
      </div>
    );

    return (
      <div>
        <div className="blog_section">
          <p className="blog_section_title">블로그</p>
          <div className="blog_section_top_line"></div>
          <div className="blog_section_post_container">
            <div>
              {recentThreePosts ? (
                <div>{showPosts}</div>
              ) : (
                <div>{emptyPosts}</div>
              )}
            </div>
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
