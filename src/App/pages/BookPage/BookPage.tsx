import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@src/App/store/slices";
import { Meta, getOrganizationBook } from "@store/slices/bookSlice";
import { Container, Col, Button, Row, Image, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const BookPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { authors, img, title, categories, description } = useAppSelector(
    (state) => state.book.book,
  );
  const { loadingStatus } = useAppSelector((state) => state.book);

  useEffect(() => {
    if (!id) return;
    dispatch(getOrganizationBook(id));
  }, [dispatch, id]);

  const handleOnClick = () => {
    navigate("/");
  };

  if (loadingStatus === Meta.failed) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <h1>Server Error</h1>
      </div>
    );
  }

  if (loadingStatus === Meta.loading) {
    return (
      <div className="d-flex justify-content-center align-items-center my-4 h-100">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <Image className="w-75" src={img} />
        </Col>
        <Col className="col-12 col-md-6 mt-3 mt-mb-0">
          {categories && <div className=" mb-3">{categories}</div>}
          <h3 className="mb-2">{title}</h3>
          {authors && (
            <div className="text-decoration-underline mb-2">{authors}</div>
          )}
          <p className="p-2">{description}</p>
        </Col>
      </Row>
      <div className="text-center">
        <Button
          onClick={handleOnClick}
          className="px-3 mt-5 mb-5 btn-outline-dark btn-lg btn-light"
        >
          Back
        </Button>
      </div>
    </Container>
  );
};

export default BookPage;
