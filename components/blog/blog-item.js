import { useRouter } from "next/router";
import classes from "./blog-item.module.css";
import Image from "next/image";
import Button from "../ui/button";

function BlogItem(props) {
  const router = useRouter();
  const { id, title, author, body } = props.data;
  let body2 = body;
  body2 =
    "Mollit Lorem ad do velit occaecat qui tempor proident est mollit culpa minim quis et.";

  function exploreHandler() {
    const fullPath = `/blog/${id}`;
    router.push(fullPath);
  }

  return (
    <li className={classes.item}>
      <div className={classes.card}>
        <div>
          <Image
            src={`/images/introvert-event.jpg`}
            alt={title}
            width={400}
            height={300}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{body2}</p>
        </div>
        <Button link={`blog/${id}`}>Explore</Button>
      </div>
    </li>
  );
}

export default BlogItem;
