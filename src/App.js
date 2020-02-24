import React from "react";
import Header from "./components/structure/header";
import Content from "./components/structure/content";
import Footer from "./components/structure/footer";
import "../src/components/stylesheets/app.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
