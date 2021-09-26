import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import newsData from "../../../medicine_news.json";
import { Card, Col } from "antd";
const { Meta } = Card;

function News() {
  const [News, setNews] = useState([]);
  useEffect(() => {
    setNews(newsData);
    // alert(News);
  }, []);

  const renderNews = News.map((article, index) => {
    if (article.title) {
      return (
        <Col lg={8} md={8} xs={24}>
          <Card
            hoberable
            style={{ width: "310px", height: "400px", borderRadius: "10px" }}
            cover={<img alt="news" src={article.img} overflow="hidden" />}
          >
            <Meta title={article.title}></Meta>
          </Card>
        </Col>
      );
    } else {
      return <div>loading...</div>;
    }
  });

  return (
    <div className="news">
      <h1>Latest news</h1>
      <div
        className="container"
        style={{ display: "flex", width: "1100px", flexWrap: "wrap" }}
      >
        {renderNews}
        {/* <NewsCard
          title="hi"
          img="//i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/09/GettyImages-952249106_header-1024x575.jpg?w=1155&h=1528"
        ></NewsCard> */}
      </div>
    </div>
  );
}

export default News;
