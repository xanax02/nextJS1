// pre-rendering this page
import { useState } from "react";
import { getFilePath, fileData } from "../api/feedback";

const feedbackPage = (props) => {
  const [feedbackDetail, setFeedbackDetail] = useState();

  const detailHandler = async (id) => {
    const response = await fetch(`api/${id}`);
    const data = await response.json();
    setFeedbackDetail(data.selectedFeedback.email);
  };

  //   console.log(props.data);
  return (
    <>
      <h1>Feedbacks</h1>
      {feedbackDetail && <h3>{feedbackDetail}</h3>}
      {props.data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.feedback}</h3>
            <button onClick={detailHandler.bind(null, item.id)}>
              Show Detail
            </button>
            {/* bind is used to preconfigure fn for every id */}
          </div>
        );
      })}
    </>
  );
};

export default feedbackPage;

export function getStaticProps() {
  // when we have to communicate with database through GSP or SSP request are made directlly to the server rather
  // communicating with apis.
  const filePath = getFilePath();
  const data = fileData(filePath);

  //returning static props
  return {
    props: { data },
  };
}
