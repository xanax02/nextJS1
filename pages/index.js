import { useRef } from "react";

const HomePage = () => {
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
    </>
  );
};

export default HomePage;
