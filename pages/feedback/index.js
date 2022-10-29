// pre-rendering this page
import { getFilePath, fileData } from "../api/feedback";

const feedbackPage = (props) => {
  //   console.log(props.data);
  return (
    <>
      <h1>Feedbacks</h1>
      {props.data.map((item) => {
        return <h3 key={item.id}>{item.feedback}</h3>;
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
