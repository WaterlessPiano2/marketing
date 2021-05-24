import Head from "next/head";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import getPageName from "../utils/string";
import Intro from "../components/intro";

const About = () => {
  const router = useRouter();
  let pageName = getPageName(router.pathname);
  return (
    <>
      <Head>
        <title>{`Agile Import - ${pageName}`}</title>
      </Head>
      <Layout>
        <Container>
          <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <Intro pageName={pageName} />

                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    Who are we?
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    We are entrepreneurs with software development and AI
                    background. A year ago we found out about the shortage of
                    customs entry clerks in the UK. So we decided to learn more
                    about customs and see if we can use our tech experience
                    to help solve this problem.
                  </p>
                </div>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    What matters to us?
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    The main reason we started this project is because all of the
                    UK's trade with the EU will have to be declared to customs.
                    This means extra work required from traders to continue
                    doing their normal business. This directly reflect on the
                    prices and availability of the goods that we may be using
                    every day. So we thought, if we could create a platform to
                    declare customs, which is time and money saving for
                    businesses, then hopefully we can reduce the impact of
                    Brexit on UK traders.
                  </p>
                </div>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    What have we done so far?
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    We have learned how the customs in the UK works. We have
                    been using the information from HMRC to create a software
                    for declaring customs. We have been speaking to UK traders
                    and freight forwarder to understand how they declare
                    customs. We have been creating the "under the hood" part of
                    the software for data storage and HMRC integration. We are
                    now ready to collabrate with our potential users to design
                    features of the software, to make it perfectly suited for
                    them.
                  </p>
                </div>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    What is our goal?
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    Our goal is to create an alternative platform for declaring
                    customs in the UK. By creating this, we want businesses to
                    have a better, faster and cheaper alternative compared to
                    current options.
                  </p>
                </div>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    What is our vision?
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    Our vision is to help identify and remove the bottlenecks in
                    the UK supply chain using technology. We also want to
                    increase transparency in the supply chain and give more
                    control to businesses to make the best decisions for
                    themselves.
                  </p>
                </div>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    What is our Mission?
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    We want to reach our vision by listening to businesses and
                    figuring out how can we make their life easier. We are going
                    to stay agile and adapt to changing laws and requirements of
                    our users.
                  </p>
                </div>
                <div className="py-6">
                  <h1 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
                    About you
                  </h1>
                  <p className="mt-2 text-base text-gray-700">
                    We are looking to help UK businesses who regularly trade or
                    facilitate the trade of goods in to the UK . The
                    ideal business would have inhouse freight expertise, so they
                    could work with us designing the software that they will be
                    using.
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
