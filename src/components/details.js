import React from "react";
import Container from "./container";

const Details = () => {
  return (
    <Container>
      <h4 className="text-lg">
        Vishuddha is a project that relies on the community. You can
        contribute{" "}
        <a
          className="text-brand font-semibold hover:text-brand-dark"
          href="https://github.com/venusuranus/vishuddha"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </h4>
    </Container>
  );
};

export default Details;
