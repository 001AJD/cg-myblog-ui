import classes from "./card.module.css";
import Button from "./button";
import Image from "next/image";

function Card(props) {
  const { title, summary, image, id } = props;

  return (
    <div className={classes.card}>
      <div>
        <Image
          src={`/images/${image}.jpg`}
          alt={title}
          width={400}
          height={300}
        />
      </div>

      <div>
        <p>{summary}</p>
      </div>
      <Button link={`blog/${id}`}>Explore</Button>
    </div>
  );
}

export default Card;
