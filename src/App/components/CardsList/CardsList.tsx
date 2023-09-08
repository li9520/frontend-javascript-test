import React from "react";

import Card, { CardProps } from "@components/Card";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type CardsListProps = {
  cards: CardProps[];
};
const CardsList: React.FC<CardsListProps> = ({ cards }) => {
  const navigate = useNavigate();
  return (
    <Row>
      {cards.map((card) => (
        <Col key={card.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
          <Card {...card} onClick={() => navigate(`/book/${card.id}`)} />
        </Col>
      ))}
    </Row>
  );
};

export default CardsList;
