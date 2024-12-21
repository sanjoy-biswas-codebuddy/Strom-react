import React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header onScroll={scrollToSection} />
      <div className="relative z-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
