import React from "react";

import { Card } from "react-bootstrap";

export type CardProps = {
  id: string;
  image: string;
  title: string;
  author: string;
  category?: string;
  onClick?: React.MouseEventHandler;
};

const MyCard: React.FC<CardProps> = ({
  image,
  title,
  author,
  category,
  onClick,
}) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    onClick && onClick(e);
  };
  return (
    <Card
      onClick={handleClick}
      className="shadow-sm x-shadow-fade-in h-100 overflow-hidden "
      role="button"
    >
      <Card.Img
        className="w-50 my-5 mx-auto shadow-lg p-3 mb-5 bg-body rounded"
        variant="top"
        src={image}
        alt="фото книги"
      />
      <Card.Body>
        <Card.Link className="text-secondary" href="#">
          {category}
        </Card.Link>
        <Card.Title className="mt-3">{title}</Card.Title>
        <Card.Text className="text-secondary">{author}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
