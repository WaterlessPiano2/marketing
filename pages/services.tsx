import Head from "next/head";
import React from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

const About = () => {
  return (
    <>
      <Head>
        <title>Agile Import - Services</title>
      </Head>
      <Layout>
        <Container>
          <Intro />
          <h1>About</h1>
        </Container>
      </Layout>
    </>
  );
};

export default About;
