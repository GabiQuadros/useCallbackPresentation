import React from "react";
import TitlePage from "../components/TitlePage";

const Contact: React.FC = () => {
  return (
    <>
      <TitlePage title="Contact" />
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          color: "black",
          padding: "30px",
        }}
      >
        <h5>+55 51 99584-8923</h5>
      </div>
    </>
  );
};

export default Contact;
