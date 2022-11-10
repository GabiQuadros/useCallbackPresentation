import React from "react";
import { Link } from "react-router-dom";

interface RouteLinkProps {
  route: string;
  titulo: string;
}

const RouteLink: React.FC<RouteLinkProps> = ({ route, titulo }) => {
  return (
    <React.Fragment>
      <Link to={route}>{titulo}</Link>
    </React.Fragment>
  );
};

export default RouteLink;
