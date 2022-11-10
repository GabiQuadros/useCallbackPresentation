import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "../components/TitlePage";
import RouteLink from "../components/RouteLink";

const Home: React.FC = () => {
  return (
    <div style={{ maxWidth: "700px" }}>
      <TitlePage title="Home" subTitle="Meu Componente" />
      <RouteLink route="/about" titulo="About" />
    </div>
  );
};

export default Home;
