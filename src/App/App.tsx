import React from "react";

import Layout from "@components/Layout";
import BookPage from "@pages/BookPage";
import CatalogPage from "@pages/CatalogPage";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage />} />
        <Route path="book/:id" element={<BookPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
