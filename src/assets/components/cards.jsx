import React from "react";

const Cards = ({ children }) => {
  return <div className="Card">{children}</div>;
};

const CardContent = ({ content }) => {
  return <div className="CardContent">{content}</div>;
};

export { Cards, CardContent };
