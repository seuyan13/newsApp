import React from "react";
import styled from "styled-components";

const Footer = ({ pageIndex, changePage }) => {
  const pageList = Array.from({ length: pageIndex }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="pagination">
        {pageList.map((page) => (
          <button className="page-item" onClick={changePage(page)}>
            {page}
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Footer;
