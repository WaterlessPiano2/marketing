import Head from "next/head";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";

const About = () => {
  return (
    <>
      <Head>
        <title>Agile Import - About</title>
      </Head>
      <Layout>
        <Container>
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h1 className="text-base text-green-600 font-semibold tracking-wide uppercase">
                  About Us
                </h1>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    Who are we?
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    We are a bunch of tech entrepreneurs with software
                    development and AI background. A year ago we found out about
                    the shortage of customs entry clerks in the UK. So we have
                    decided to learn more about this field and see if we can use
                    our tech experience to help solve this problem.
                  </p>
                </div>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    What matters to us?
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    The main reason we started this project was the realisation
                    of how 60% of all of UK imports were from EU meaning they
                    didn't require customs. After BREXIT they will need customs.
                    Hence there will be extra work for all the imports in the
                    UK, which is time-consuming, expensive and complicated. This
                    will directly reflect on the prices of the goods that we may
                    be using every day. So we thought, if we could create a
                    platform to declare customs, which didn't cost an arm and a
                    leg, then hopefully we can reduce the cost of the imports.
                    By working with our users we want to create a product that
                    will make it easier for them to declare customs.
                  </p>
                </div>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    What do we do?
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    We have learned how the customs in the UK will work after
                    BREXIT. We have been creating software to accomplish this to
                    solidify our learning and prove our capability to the
                    industry. Now that we understand the industry better we are
                    ready to collabrate our potential users to make something
                    perfectly suited for their usecase.
                  </p>
                </div>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    About you
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    We are looking to help UK businesses who trade or
                    facilitates the trade of goods between the UK and the EU.
                    Our expertise lies in tech rather than freight and customs.
                    So we are looking to work with businesses who can fill our
                    knowledge gap and happy for us to do the same for them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default About;
