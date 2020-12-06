import React from "react";
import Header from "../components/Header";
import ItemsTable from "../components/ItemsTable";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <ItemsTable />
    </div>
  );
};

export default Home;
