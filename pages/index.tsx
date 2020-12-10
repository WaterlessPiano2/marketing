import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

const Index = () => {

  return (
    <>
      <Head>
        <title>Agile Import - Services</title>
      </Head>
      <Layout>
        <Container>
          <Intro />
          <h1>Home</h1>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
