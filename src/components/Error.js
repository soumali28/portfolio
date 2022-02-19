import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.h1`
  margin: 2rem auto;
  padding: 2rem;
`;

const Error = () => {
  return <ErrorMessage>Opps!! Page not found.</ErrorMessage>;
};

export default Error;
