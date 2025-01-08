import React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Header />
      <div className="relative z-10">
        <Outlet />
      </div>
      <Footer />
    </MantineProvider>
  );
};

export default App;


