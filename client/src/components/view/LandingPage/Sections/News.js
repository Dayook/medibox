import React from "react";
import NewsCard from './NewsCard'

function News() {
  return (
    <div className="news">
      <h1>뉴스뉴스 what's news</h1>
      <hr />
      <div className="container" style={{ display: "flex" }}>
        <NewsCard title="hi" img="//i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/09/GettyImages-952249106_header-1024x575.jpg?w=1155&h=1528"></NewsCard>
      </div>
    </div>
  );
}

export default News;
