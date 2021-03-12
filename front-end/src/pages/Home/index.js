import React from "react";
import AddNaver from "../../components/AddNaver";
import Header from "../../components/Header";
import Profile from "../../components/Profile";

function Home() {
  return (
    <div className="home">
      <Header />
      <AddNaver />
      <Profile />
    </div>
  );
}

export default Home;
