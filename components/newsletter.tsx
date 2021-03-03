import React, { useState } from "react";
const axios = require("axios").default;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const CheckError = (response: Response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  };

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      console.log(e);
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-8 rounded-sm">
      <span className="text-3xl font-bold w-4/5 text-center leading-relaxed">
        <a href="https://www.linkedin.com/in/chadderya/">
          Click here to contact me on LinkedIn
        </a>
      </span>

      {/* <div className="flex w-1/2 justify-center mt-5 flex-col lg:flex-row">
        <input
          name="email"
          className="appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 border border-gray-500 rounded py-2 px-4"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$"
        />
        <button
          aria-label="Submit email to and subscribe"
          className={`lg:ml-2 w-full lg:w-1/3 bg-blue-400 focus:shadow-outline focus:outline-none rounded ${
            state === "LOADING" ? "button-gradient-loading bg-blue-200" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )} */}
    </div>
  );
};

export default Newsletter;
