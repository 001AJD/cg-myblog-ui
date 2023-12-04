import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AddCommentSection from "../../components/blog/add-comment-section";
import CommentsList from "../../components/blog/comments-list";
import BlogDetailPage from "@/components/blog/blog-detail";

function BlogPage() {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const blogId = router.query.blogid;

  useEffect(() => {
    fetch(
      `https://us-central1-cg-myblog-api.cloudfunctions.net/api/blogs/getBlog/${blogId}`,
      {
        method: "GET",
        headers: {
          "api-key": "A098",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP Error from API");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <Fragment>
        <BlogDetailPage
          title={blog.title}
          author={blog.author}
          body={blog.body}
          comments={blog.comments}
        />
        {/* <div>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.body}</p>
          {blog.comments ? (
            <CommentsList comments={blog.comments} />
          ) : (
            <div>
              <h4>Comments</h4>
              <p>No one have commented on your post yet!</p>
            </div>
          )}
          <AddCommentSection />
        </div> */}
      </Fragment>
    );
  }
}

export default BlogPage;
