import React from "react";

import SearchForm from "@components/SearchForm";
import background from "@img/banner3.jpeg";
const SearchPanel = () => {
  return (
    <div
      className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
      style={{
        backgroundImage: `url(${background})`,
        height: "35vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <SearchForm />
    </div>
  );
};

export default SearchPanel;
