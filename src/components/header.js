import { Link } from "gatsby";
import PropTypes from "prop-types";
import Container from "./container";
import Logo from "../images/plexus-icon.png";
import InformationCircle from "../images/info.inline.svg";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="bg-black border-b-4 border-brand-dark">
    <Container>
      <div className="flex justify-between items-center py-6 md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <h1 className="flex items-center">
            <img className="h-6 w-auto sm:h-10" src={Logo} alt="Vishuddha" />
            <Link
              className="font-mono font-bold text-3xl md:text-5xl text-white ml-2"
              to="/"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/help">
            <div className="text-indigo-600 hover:text-indigo-700">
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
