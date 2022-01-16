import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status } = useHttp(addComment, true);
  const params = useParams();
  const { quoteId } = params;

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    const enteredText = commentTextRef.current.value;
    sendRequest({ commentData: { enteredText }, quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {/* {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )} */}
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
