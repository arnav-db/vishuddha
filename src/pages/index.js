import React from "react";
import Layout from "../components/layout";
import Shabd from "../components/shabd";
import SEO from "../components/seo";
import Container from "../components/container";
import Details from "../components/details";

const IndexPage = () => (
  <Layout>
    <SEO title="Crowdsourced de-Googled Android apps status ratings" />
    <Container>
      <div className="my-12 flex flex-col sm:flex-row">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
          Remove the fear of Android app compatibility <br />
          <span className="text-5xl">
            on <span className="text-brand">de-Googled</span> devices.
          </span>
        </h2>
      </div>
    </Container>
    <Details />
    <Shabd />
  </Layout>
);

export default IndexPage;
