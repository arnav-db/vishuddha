import { Link } from "gatsby";
import PropTypes from "prop-types";
import Container from "./container";
import Logo from "../images/vishuddha-dark.png";
import InformationCircle from "../images/info.inline.svg";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="bg-brand-dark border-b-4 border-brand">
    <Container>
      <div className="flex justify-between items-center py-6 md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <h1 className="flex items-center">
            <a href="/">
            <img className="h-6 w-auto sm:h-20" src={Logo} alt="Vishuddha" />
            </a>
          </h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/help">
            <div className="text-brand-light hover:text-brand">
              <InformationCircle className="w-auto h-10"/>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
