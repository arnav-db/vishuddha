import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Container from "../components/container";
import Details from "../components/details";
import SEO from "../components/seo";

import SearchCircle from "../images/search.inline.svg";

const About = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <h1 className="my-12 flex justify-between text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
        <div>About</div>
        <Link to="/">
          <div className="text-3xl text-brand hover:text-brand-dark flex items-center">
            <SearchCircle className="h-8 w-auto" /> Back to search
          </div>
        </Link>
      </h1>
    </Container>
    <Details />
  </Layout>
);

export default About;
