import React from "react";
import Container from "./container";

const Details = () => {
  return (
    <Container>
      <h4 className="text-lg">
        <span className="font-semibold text-brand">Vishuddha</span> is a searchable, filterable database of Hindi words. 
        Its purpose is to help you quickly find the Hindi terms for non-Hindi words that are usually being used. 
        It is a step towards learning and using a purer form of the language.
      </h4>
        <br></br>
        <br></br>
        <br></br>
      <div className="text-lg">This is a project that relies on the community. You can
        contribute{" "}
        <a
          className="text-brand font-semibold hover:text-brand-dark"
          href="https://github.com/venusuranus/vishuddha"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </div>
    </Container>
  );
};

export default Details;
