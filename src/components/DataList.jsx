import React, { useEffect, useState } from "react";
import axios from "axios";
import DataItem from "./DataItem";
import Footer from "./Footer";
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

const StyleForm = styled.div`
  display: flex;
`;

const StyleInput = styled.input`
  margin-right: 0.5rem;
  border-radius: 0.5rem;
`;

const StyleButton = styled.button`
  color: white;
  background-color: green;
  border-radius: 0.3rem;
  font-size: 1.2 rem;
`;
//---------------------------------------------------------

const DataList = ({ category, title }) => {
  const [dataList, setDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [item, setItem] = useState(search);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const changePage = (number) => {
    setCurrentPage(number);
  };

  const getDateList = async (page, keyword) => {
    await axios
      .get(getUrl({ category, keyword: search }))
      .then((res) => setDataList(res.data.articles));
    //Test
    console.log(dataList);
  };

  /*
  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value.toLowerCase());
  };

  const handleSubmit = () => {
    console.log(search);
    getDateList(category);
    setSearch("");
    title = search;
  };
*/
  useEffect(() => {
    getDateList(currentPage);
  }, [category]);

  return (
    <StyleContainer>
      {/*}
      <StyleForm>
        <StyleInput
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
          value={search}
        />
        <StyleButton onClick={handleSubmit}>Search</StyleButton>
      </StyleForm>
  */}
      <StyleText>{title}</StyleText>
      {dataList?.map((data) => (
        <DataItem data={data} />
      ))}
      <Footer pageIndex={currentPage} changePage={changePage} />
    </StyleContainer>
  );
};

export default DataList;
