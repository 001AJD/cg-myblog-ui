import classes from "./add-comment-section.module.css";
import Button from "../ui/button";

function AddCommentSection() {
  return (
    <div className={classes.card}>
      <textarea rows={1}></textarea>
      <Button>Add Comment</Button>
    </div>
  );
}

export default AddCommentSection;
