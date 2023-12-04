import classes from "./comments-list.module.css";
import CommentItem from "./comment-item";

function CommentsList(props) {
  const dummyData = props.comments;

  return (
    <ul className={classes.list}>
      {dummyData.map((comment) => (
        <li key={comment.userName}>
          <CommentItem />
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
