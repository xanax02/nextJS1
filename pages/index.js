import { useRef, useState } from "react";

const HomePage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: email, feedback: feedback }), // email and feedback fields for request
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const loadFeedback = async () => {
    const response = await fetch("api/feedback");
    const data = await response.json();
    setFeedbacks(data.feedback);
  };

  return (
    <>
      <h1>Home Page</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Your Email</label>
        <input ref={emailRef} type="emial" id="email" />
        <label htmlFor="feedback">Your Feedback</label>
        <textarea ref={feedbackRef} id="feedback" rows="5" />
        <button>Submit Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedback}>Load Feedback</button>
      <ul>
        {feedbacks.map((feedback) => {
          return <li key={feedback.id}>{feedback.feedback}</li>;
        })}
      </ul>
    </>
  );
};

export default HomePage;
