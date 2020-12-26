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
    serviceID = process.env.SERVICE_ID || "",
    templateID = process.env.TEMPLATE_ID || "",
    userID = process.env.USER_ID || "";

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
              <div className="lg:text-center">
                <form className="contact-form" onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="name" />
                  <label>Email</label>
                  <input type="email" name="email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default About;
