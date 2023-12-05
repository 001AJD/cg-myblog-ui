import classes from "./comments-list.module.css";
import CommentItem from "./comment-item";

function CommentsList(props) {
  const dummyData = props.comments;

  return (
    <ul className={classes.list}>
      {dummyData.map((comment, index) => (
        <li key={index}>
          <CommentItem userName={comment.userName} comment={comment.comment} />
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
