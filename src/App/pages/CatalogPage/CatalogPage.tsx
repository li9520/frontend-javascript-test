import React, { useEffect } from "react";

import CardsList from "@components/CardsList";
import { MAXRESULTS } from "@const/api";
import store, { useAppDispatch, useAppSelector } from "@src/App/store/slices";
import {
  booksSelector,
  getOrganizationBooksList,
  nextPage,
} from "@store/slices/booksSlice";
import { Button, Spinner } from "react-bootstrap";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  //const list = useAppSelector((state) => {
  //  const books = Object.values(state.books.entities);
  //  return books;
  //});
  const list = booksSelector.selectAll(store.getState());
  const { loadingStatus, page, activeFilters, totalItems } = useAppSelector(
    (state) => state.books,
  );

  useEffect(() => {
    dispatch(
      getOrganizationBooksList({
        ...activeFilters,
        maxResults: MAXRESULTS,
        startIndex: page * MAXRESULTS,
      }),
    );
  }, [dispatch, page, activeFilters]);

  if (loadingStatus === "failed") {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <h1>Server Error</h1>
      </div>
    );
  }

  const handleAddPage = () => {
    dispatch(nextPage());
  };

  return (
    <div>
      <p>
        Found {totalItems} results
        {activeFilters.q !== `""` && <span> for {activeFilters.q}</span>}
      </p>
      {list.length !== 0 && <CardsList cards={list} />}
      {loadingStatus === "loading" && (
        <div className="d-flex justify-content-center align-items-center my-4 h-100">
          <Spinner animation="border" role="status" />
        </div>
      )}
      {loadingStatus !== "loading" && list.length !== 0 && (
        <div className=" d-flex justify-content-center ">
          <Button
            className="btn-outline-dark btn-lg my-4 btn-light"
            onClick={handleAddPage}
          >
            load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
