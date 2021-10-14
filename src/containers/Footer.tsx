import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #c0764f;
  text-align: center;
  color: white;
  font-size: 1rem;
`;

const FooterLayout = () => {
  return <FooterContainer>© Burger Building App 2021 ®</FooterContainer>;
};

export default FooterLayout;
