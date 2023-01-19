import React from "react";
import { format } from "date-fns";
import styled from "styled-components";

//styled component-----------------------------------
const UrlLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const DateStyle = styled.p`
  color: blue;
`;
//----------------------------------------------------

const DataItem = ({ data }) => {
  return (
    <React.Fragment>
      <div
        className="container my-2 mt-3 mb-3"
        style={{
          borderRadius: "10px",
          boxShadow: "2px 2px 10px silver",
        }}
      >
        <UrlLink href={data.url} target="blank">
          <h5>{data.title}</h5>
        </UrlLink>

        <p>{data.description}</p>
        <DateStyle> {format(data.publishedAt, "DD-MM-YYYY")} </DateStyle>
      </div>
    </React.Fragment>
  );
};

export default DataItem;
