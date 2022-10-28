import fs from "fs";
import path from "path";
// this is not a component this is a function (server side code) for handling requests
function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email; // incomming data will have email and feedback fields
    const feedbackText = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      feedback: feedbackText,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath); // first we'll have the data from the feedback json file;
    const data = JSON.parse(fileData); // converting the json data into normal form
    data.push(newFeedback); // adding new feedback to the data.
    fs.writeFileSync(filePath, JSON.stringify(data)); // now add this new  data file with new feedback to the feedback.json file.
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    res.status(200).json({ message: "This works!" }); // .json to set the data that will be sent when a request is made
  }
}

export default handler;
