import Image from "next/image";
import classes from "./blog-detail.module.css";
import CommentsList from "./comments-list";

function BlogDetailPage(props) {
  const { title, author, body, comments } = props;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>Blog Title</h1>
        <Image
          src="/images/coding-event.jpg"
          alt={title}
          width={1000}
          height={300}
        />

        <p>
          &emsp;&emsp;&emsp;&emsp;{body}
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;Anim et incididunt laboris ea nulla labore
          elit esse fugiat. Do sint elit Lorem mollit occaecat incididunt
          aliquip fugiat tempor voluptate irure quis irure. Deserunt esse id ad
          irure sint aute quis tempor deserunt ipsum ut labore sunt voluptate.
          Nulla id culpa aliquip ad laborum magna tempor. Laboris ut esse
          reprehenderit eiusmod quis exercitation commodo officia culpa aute. Ut
          do cupidatat deserunt adipisicing enim adipisicing est nostrud officia
          reprehenderit Lorem pariatur quis culpa. Ipsum ipsum qui sit nulla
          deserunt cupidatat anim incididunt cupidatat Lorem. Laborum Lorem
          aliqua eu irure magna quis minim. Et amet amet aute nisi id. Proident
          deserunt duis in occaecat tempor ipsum eu. Magna Lorem consequat amet
          consectetur enim sunt veniam incididunt velit in amet esse voluptate
          deserunt. Consequat ad laborum dolore dolor.
        </p>
      </div>
      <div>
        <h1 className={classes.title}>Comments Section</h1>
        <CommentsList comments={comments} />
      </div>
    </div>
  );
}

export default BlogDetailPage;
