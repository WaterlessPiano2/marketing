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
          <div className="">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <Intro pageName={pageName} />
              </div>
              <p className="text-center">
                Drop us a message, we will get back to you ASAP!
              </p>
              <form
                id="myForm"
                className="max-w-4 contact-form grid grid-cols-1 grid-rows-3 gap-4"
                onSubmit={sendEmail}
              >
                {" "}
                <div className=" invisible">
                  <label className="hidden font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    value="Name"
                    type="text"
                    name="name"
                    id="name"
                    className="p-2 hidden sm:text-sm  border border-gray-500 rounded-md "
                  />
                </div>{" "}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Messsage:
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
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
