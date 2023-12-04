import classes from "./add-comment-section.module.css";
import Button from "../ui/button";
import { getUser } from "@/lib/getUser";
import { signInWithGoogle } from "@/lib/firebase/auth";

function AddCommentSection() {
  const user = getUser();

  function loginHandler() {
    signInWithGoogle();
  }

  if (user) {
    return (
      <div className={classes.card}>
        <textarea rows={1}></textarea>
        <Button>Add Comment</Button>
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
