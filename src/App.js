import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataList from "./components/DataList";
import Navbar from "./components/Navbar";

const App = () => {
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <Router>
        <Navbar search={search} setSearch={setSearch} setRefresh={setRefresh} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <DataList
                category="general"
                title="TOP HEADLINES"
                search={search}
                setSearch={setSearch}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route
            path="/business"
            element={
              <DataList
                category="business"
                title="BUSINESS"
                search={search}
                setSearch={setSearch}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <DataList
                category="entertainment"
                title="ENTERTAINMENT"
                search={search}
                setSearch={setSearch}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <DataList
                category="sports"
                title="SPORTS"
                search={search}
                setSearch={setSearch}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route
            path="/health"
            element={
              <DataList
                category="health"
                title="HEALTH"
                search={search}
                setSearch={setSearch}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <DataList
                category="technology"
                title="TECHNOLOGY"
                search={search}
                setSearch={setSearch}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            }
          />
          <Route
            path={search}
            element={
              <DataList
                category={search}
                title={`Search Keyword: ${search}`}
                search={search}
                setSearch={setSearch}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
