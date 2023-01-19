import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DataList from "./components/DataList";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<DataList category="general" title="TOP HEADLINES" />}
          />
          <Route
            path="/business"
            element={<DataList category="business" title="BUSINESS" />}
          />
          <Route
            path="/entertainment"
            element={
              <DataList category="entertainment" title="ENTERTAINMENT" />
            }
          />
          <Route
            path="/sports"
            element={<DataList category="sports" title="SPORTS" />}
          />
          <Route
            path="/health"
            element={<DataList category="health" title="HEALTH" />}
          />
          <Route
            path="/technology"
            element={<DataList category="technology" title="TECHNOLOGY" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
