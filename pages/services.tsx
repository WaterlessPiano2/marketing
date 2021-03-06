import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import getPageName from "../utils/string";

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
          <div className="pt-12 pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <Intro pageName={pageName} />
                <p className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Software for Making Import Declarations to HMRC
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  We are looking for businesses who regularly import goods in to UK, to
                  work with us to design and develop the best customs
                  declaration software for them.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Get Instant help
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Each form field is linked to the official documentaion
                        so, you dont have to spend time researching what to
                        input in to ambiguous fields.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Audit Logging
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Worried about your audit? Every action taken is kept in
                        history for ten years. No more keeping rooms full of
                        paper. Fully GDPR complient, you are able to download
                        your data and audit log any time.
                      </dd>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Designed by You
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Tell us what features are the most useful and we
                        will create and maintain a software around these for
                        you. Our goal is to save you money and time, while ensuring your goods spend least amoutnt of time possible at the border.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Longterm Relationship
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We want to work with you to identify bottlenecks and
                        repetitive tasks in your supply chain and use technology
                        to mitigate them over long term.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>{" "}
        </Container>
      </Layout>
    </>
  );
};

export default About;
