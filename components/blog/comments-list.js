import classes from "./comments-list.module.css";
import CommentItem from "./comment-item";
import { myBlogAPI } from "./apiConfig.js";
import { Fragment, useEffect, useState } from "react";
import NoCommentsSection from "./no-comments-section";
import AddCommentSection from "./add-comment-section";

function CommentsList(props) {
  const [comments, setComments] = useState([]);
  const { blogId } = props;

  useEffect(() => {
    getComments();
  }, []);

  function getComments() {
    fetch(`${myBlogAPI}/getcomments/${blogId}`, {
      method: "GET",
      headers: {
        "api-key": "A098",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        return response.json();
      })
      .then((data) => {
        setComments(data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (comments.length === 0) {
    return (
      <Fragment>
        <NoCommentsSection />;
        <AddCommentSection blogId={blogId} onCommentAdded={getComments} />
      </Fragment>
    );
  } else {
    return (
      <div className={classes.scrollable}>
        <h1 className={classes.title}>Comments Section</h1>
        <ul className={classes.list}>
          {comments.map((comment, index) => (
            <li key={index}>
              <CommentItem
                userName={comment.userName}
                comment={comment.comment}
              />
            </li>
          ))}
        </ul>
        <AddCommentSection blogId={blogId} onCommentAdded={getComments} />
      </div>
    );
  }
}

export default CommentsList;
