// dynamic api route
import { fileData, getFilePath } from "./feedback";

const handler = (req, res) => {
  const feedbackId = req.query.feedbackId;

  const filePath = getFilePath();
  const data = fileData(filePath);

  const selectedFeedback = data.find((feedback) => feedback.id === feedbackId);
  //   console.log(selectedFeedback);

  res.status(200).json({ selectedFeedback });
};

export default handler;
