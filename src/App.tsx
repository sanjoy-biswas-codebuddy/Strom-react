import React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative z-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
