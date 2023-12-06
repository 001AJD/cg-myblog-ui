import classes from "./add-comment-section.module.css";
import Button from "./components/ui/button";
import { getUser } from "@/lib/getUser";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRef } from "react";
import { apiKey } from "./apiConfig.js";
import { useRouter } from "next/router";

function AddCommentSection(props) {
  const router = useRouter();
  const commentInputRef = useRef();
  const user = getUser();
  const { blogId } = props;

  function loginHandler() {
    signInWithGoogle();
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredComment = commentInputRef.current.value;
    const displayName = user.displayName;

    const URL =
      "https://us-central1-cg-myblog-api.cloudfunctions.net/api/blogs/addcomment/";
    const payload = {
      userName: displayName,
      comment: enteredComment,
    };

    fetch(`${URL}${blogId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
    }).then((response) => {
      if (response.ok) {
        props.onCommentAdded();
        commentInputRef.current.value = "";
      } else {
        throw new Error("Failed to add new comment");
      }
    });
  }

  if (user) {
    return (
      <div>
        <form onSubmit={submitHandler} className={classes.inlineForm}>
          <textarea
            rows={1}
            ref={commentInputRef}
            placeholder="Add your comment"
          />
          <Button>Add Comment</Button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={classes.card2}>
        <h4>Login to add comments</h4>
        <Button onClick={loginHandler}>Login</Button>
      </div>
    );
  }
}

export default AddCommentSection;
