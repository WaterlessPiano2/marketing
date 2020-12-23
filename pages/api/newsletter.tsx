function getRequestParams(email) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return { url, data, headers };
}

export default async (req, res) => {
  console.log("WORKS1");
  const { email } = req.body;
  if (!email || !email.length) {
    console.log("WORKS2");
    return res.status(400).json({
      error: "Forgot your email?",
    });
  }

  console.log("WORKS3");
  try {
    const { url, data, headers } = getRequestParams(email);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    }).then((result) => {
      return res.status(201).json({ error: null });
    });
  } catch (e) {
    return res.status(400).json({
      error:
        "Oops, something went wrong... Send me an email at cderya1994@gmail.com, and I will add you to the mailing list.",
    });
  }
};
