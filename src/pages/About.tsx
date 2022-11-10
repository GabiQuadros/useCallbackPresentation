import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "../components/TitlePage";

const About: React.FC = () => {
  return (
    <div>
      <TitlePage title="About" />
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};

export default About;
