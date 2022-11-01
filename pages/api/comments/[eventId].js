const helper = (req, res) => {
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Input Invalid" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({ message: "Success", comment: newComment });
  } else {
    const comments = [
      { id: "c1", name: "abhay", text: "this is the first comment" },
      { id: "c2", name: "thakur", text: "this is the second comment" },
    ];
    res.status(201).json({ message: "these are your comments" });
  }
};

export default helper;
