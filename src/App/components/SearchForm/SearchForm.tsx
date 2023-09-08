import React from "react";

import Input from "@components/Input";
import Select from "@components/Select";
import { CATEGORY_OPTIONS, SORTED_OPTIONS } from "@const/form";
import { setFilters } from "@store/slices/booksSlice";
import { useFormik } from "formik";
import { Form, Col, Row, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultSortedBy = SORTED_OPTIONS[0].value;
  const defaultcategory = CATEGORY_OPTIONS[0].value;

  const formik = useFormik({
    initialValues: {
      input: "",
      sortedBy: defaultSortedBy,
      category: defaultcategory,
    },
    onSubmit: (values) => {
      dispatch(
        setFilters({
          query: values.input,
          orderBy: values.sortedBy,
          category: values.category,
        }),
      );
      navigate("/");
    },
  });

  return (
    <Container>
      <Form className="mt-3 mt-mb-0 " onSubmit={formik.handleSubmit}>
        <h1 className="mb-5">Search for books</h1>
        <Row className="row justify-content-center gy-2">
          <Col className="col-md-12 col-lg-10">
            <Input value={formik.values.input} onChange={formik.handleChange} />
          </Col>
          <Row className="row justify-content-center gy-2 px-0 mx-0">
            <Col className="col-12 col-sm-6">
              <Form.Group
                className="mb-3 row align-items-center"
                controlId="formSelect"
              >
                <Form.Label className="col-auto fw-bold">Categories</Form.Label>
                <div className="col">
                  <Select
                    options={CATEGORY_OPTIONS}
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    name="category"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col className="col-12 col-sm-6 ">
              <Form.Group
                className="mb-3 row align-items-center"
                controlId="formSelect"
              >
                <Form.Label className="col-auto fw-bold">Sorted by</Form.Label>
                <div className="col">
                  <Select
                    options={SORTED_OPTIONS}
                    value={formik.values.sortedBy}
                    onChange={formik.handleChange}
                    name="sortedBy"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchForm;
