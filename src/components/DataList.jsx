import React, { useEffect, useState } from "react";
import axios from "axios";
import DataItem from "./DataItem";
import Footer from "./Footer";
import styled from "styled-components";

//Styled contpoint-----------------------------------------
const StyleContainer = styled.div`
  margin-top: auto 0px auto 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyleText = styled.h4`
  text-align: center;
  margin: auto 0 auto 0px;
`;
//---------------------------------------------------------

const DataList = ({ category, title }) => {
  const [dataList, setDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apiKey = "4a47e45e10be435b828f5f4f0c1a1acd";

  const changePage = (number) => {
    setCurrentPage(number);
  };

  const DataList = async (page) => {
    await axios
      .get(
        category
          ? `https://newsapi.org/v2/top-headlines?country=nz&category=${category}&apiKey=${apiKey}`
          : `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${apiKey}`
      )
      .then((res) => setDataList(res.data.articles));
    console.log(dataList);
  };

  useEffect(() => {
    DataList(currentPage);
  }, [category, currentPage]);

  return (
    <StyleContainer>
      <StyleText>{title}</StyleText>
      {dataList?.map((data) => (
        <DataItem data={data} />
      ))}
      <Footer pageIndex={currentPage} changePage={changePage} />
    </StyleContainer>
  );
};

export default DataList;
