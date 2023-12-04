import Image from "next/image";
import classes from "./comment-item.module.css";

function CommentItem() {
  const user = "Ajinkya D";
  const comment =
    "Eiusmod labore laboris culpa duis in ipsum culpa mollit incididunt.";
  const image = "/images/avatar1.jpg";
  const date = "Dec 4";

  return (
    <div className={classes.card}>
      <div className={classes.cardImage}>
        <Image src={image} alt="Profile Image" width={150} height={150} />
      </div>
      <div className={classes.content}>
        <h4>
          {user},&ensp;<time>{date}</time>
        </h4>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default CommentItem;
