import React from "react";
import styled from "styled-components";

const StyleSelectedButton = styled.button`
  background: darkblue;
  color: white;

`;

const StyleButton=styled.button`
background: orange;
`;
//----------------------------------------------------

const Pagination = ({ pageIndex, changePage, pageCount }) => {
  const pageList = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="pagination">
        {pageList.map((page) => {
          if (pageIndex === page) {
            return (
              <StyleSelectedButton
                key={page}
                className="page-item"
                onClick={() => changePage(page)}
              >
                {page}
              </StyleSelectedButton>
            );
          } else {
            return (
              <StyleButton
                key={page}
                className="page-item"
                onClick={() => changePage(page)}
              >
                {page}
              </StyleButton>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
