const helper = (req, res) => {
  if (req.method === "POST") {
    const email = req.body;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid Email" });
      return;
    }
    res.status(201).json({ message: "Success" });
  } else {
    res.status(201).json({ message: "getRequest" });
  }
};

export default helper;
