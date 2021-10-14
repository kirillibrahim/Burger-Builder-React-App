import React, { Component } from "react";

import HeaderLayout from "./Header";
import FooterLayout from "./Footer";
import styled from "styled-components";

interface State {}

interface Props {
  children: React.ReactNode;
}

const Layout = styled.div``;

const Content = styled.section``;

class DefaultLayout extends Component<Props, State> {
  render() {
    const { children } = this.props;

    return (
      <>
        <Layout>
          <HeaderLayout />
          <Content>{children}</Content>
          <FooterLayout />
        </Layout>
      </>
    );
  }
}

export default DefaultLayout;
