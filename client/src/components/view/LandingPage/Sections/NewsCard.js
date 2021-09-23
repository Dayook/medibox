import React from "react";
import { Card } from "antd";
const { Meta } = Card;

function NewsCard(props) {
  return (
    <div>
      <Card
        hoberable
        style={{ width: 300 }}
        cover={<img alt="news" src={props.img} />}
      >
        <Meta title={props.title}></Meta>
      </Card>
    </div>
  );
}

export default NewsCard;
