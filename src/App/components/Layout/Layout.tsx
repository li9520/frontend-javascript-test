import React from "react";

import SearchPanel from "@components/SearchPanel/SearchPanel";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <SearchPanel />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
