import React from "react";
import { BannerContainer } from "./components/banner-container";
import Header from "./components/header/Header";
import Showcase from "./components/showcase/Showcase";
import Navbar from "./components/showcase/Navbar";
function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div>
        <Navbar/>
        <Showcase/>
      </div>
      <div className="box">{/* <BannerContainer /> */}</div>
    </>
  );
}

export default App;
