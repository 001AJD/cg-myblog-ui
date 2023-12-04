import classes from "./comments-list.module.css";

function CommentsList(props) {
  const dummyData = props.comments;

  return (
    <ul className={classes.list}>
      {dummyData.map((comment) => (
        <li key={comment.userName}>
          {comment.userName} say's ~ {comment.comment}
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
