import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import getPageName from "../utils/string";
import emailjs from "emailjs-com";

const About = () => {
  const router = useRouter(),
    pageName = getPageName(router.pathname),
    serviceID = "service_y1oyp8p",
    templateID = "template_000xae9",
    userID = "user_X9a7OgOOTYJqqTpKOtifY";

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset;
  };

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
              </div>
              <p className=" mt-20 text-center">
                If you would like a demo, or make a suggestion just let us know
                by filling the form below. We will get back to you within 24
                hours.
              </p>
              <form
                className="mt-20 contact-form grid grid-cols-1 grid-rows-3 gap-4"
                onSubmit={sendEmail}
              >
                {" "}
                <div className="py-2 grid grid-cols-2 ">
                  <label className="block-inline font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="max-h-8 p-2 block-inline sm:text-sm  border border-gray-500 rounded-md "
                  />
                </div>{" "}
                <div className="py-2 grid grid-cols-2">
                  <label className="block-inline font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="max-h-8 p-2 block-inline sm:text-sm border border-gray-500 rounded-md "
                  />
                </div>{" "}
                <div className="py-2 grid grid-cols-2">
                  <label className="block-inline font-medium text-gray-700">
                    Messsage:
                  </label>
                  <textarea
                  rows={4}
                    name="message"
                    className="p-2 block-inline sm:text-sm border border-gray-500 rounded-md "
                  />
                </div>
                <input
                  className=" rounded w-1/5 bg-blue-400 "
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default About;
