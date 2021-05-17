import React from "react";
import "./style.css";

const Container = (params) => (
  <div className="container">
    <span>2021</span>
    <div className="content">{params.children}</div>
  </div>
);

export default Container;
