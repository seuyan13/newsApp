import React, { useEffect, useState } from "react";
import axios from "axios";
import DataItem from "./DataItem";
import Pagination from "./Pagination";
import styled from "styled-components";
import { getUrl } from "../utils";

//Styled contpoint-----------------------------------------
const StyleContainer = styled.div`
  margin: auto 0px auto 0px;
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

const DataList = ({
  category,
  title,
  search,
  setSearch,
  refresh,
  setRefresh,
}) => {
  const [dataList, setDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [item, setItem] = useState(search);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const changePage = (number) => {
    setCurrentPage(number);
  };

  const getDataList = async (page, keyword) => {
    await axios.get(getUrl({ category, keyword: search })).then((res) => {
      setDataList(res.data.articles);
      setPageCount(Math.ceil(res.data.articles.length / 5));
      setCurrentPage(1);
    });
  };

  useEffect(() => {
    getDataList(currentPage);
  }, [category]);

  useEffect(() => {
    if (refresh) {
      getDataList(currentPage);
      setRefresh(false);
      setSearch("");
    }
  }, [refresh]);

  return (
    <StyleContainer>
      <StyleText>{title}</StyleText>
      {dataList?.map((data, index) => {
        if ((currentPage - 1) * 5 <= index && index < currentPage * 5) {
          return <DataItem data={data} key={data.url} />;
        }
      })}
      <Pagination
        pageIndex={currentPage}
        changePage={changePage}
        pageCount={pageCount}
      />
    </StyleContainer>
  );
};

export default DataList;
