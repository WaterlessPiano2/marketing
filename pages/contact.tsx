import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import getPageName from "../utils/string";
import emailjs from "emailjs-com";
import { Console } from "console";

const About = () => {
  const [state, setState] = useState("");

  const router = useRouter(),
    pageName = getPageName(router.pathname),
    serviceID = "service_y1oyp8p",
    templateID = "template_000xae9",
    userID = "user_X9a7OgOOTYJqqTpKOtifY";

  const sendEmail = (e: any) => {
    e.preventDefault();
    setState("Loading");
    let name = document.getElementById("name") as HTMLFormElement;
    let email = document.getElementById("email") as HTMLFormElement;
    let message = document.getElementById("message") as HTMLFormElement;

    if (name.value && email.value && message.value) {
      emailjs.sendForm(serviceID, templateID, e.target, userID).then(
        (result) => {
          if (result?.text === "OK") {
            setState("Success");
            let form = document.getElementById("myForm");
            if (form) (form as HTMLFormElement).reset();
          } else {
            setState(
              "Server error: contact me on linked in at https://www.linkedin.com/in/chadderya/"
            );
          }
          console.log(result.text);
        },
        (error) => {
          setState(
            "Server error: contact me on linked in at https://www.linkedin.com/in/chadderya/"
          );
          console.log(error.text);
        }
      );
    } else {
      setState("Error: Fill in the fields.");
    }
  };

  return (
    <>
      <Head>
        <title>{`Agile Import - ${pageName}`}</title>
      </Head>
      <Layout>
        <Container>
          <div className="pt-12 pb-40">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <Intro pageName={pageName} />
              </div>
              <p className=" mt-20 text-center">Drop us a message</p>
              <form
                id="myForm"
                className="mt-20 max-w-4 contact-form grid grid-cols-1 grid-rows-3 gap-4"
                onSubmit={sendEmail}
              >
                {" "}
                <div className="py-2 grid grid-cols-2 invisible">
                  <label className="block-inline font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    value="mike"
                    type="text"
                    name="name"
                    id="name"
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
                    id="email"
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
                    id="message"
                    className="p-2 block-inline sm:text-sm border border-gray-500 rounded-md "
                  />
                </div>
                <input
                  aria-label="Send contact Form"
                  disabled={state === "Loading"}
                  className=" rounded w-1/5 bg-blue-400 disabled:opacity-50 "
                  type="submit"
                  value="Send"
                />
              </form>
              <div>{state}</div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default About;
