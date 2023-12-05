import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlogDetailPage from "@/components/blog/blog-detail";

function BlogPage() {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const blogId = router.query.blogid;

  useEffect(() => {
    if (router.isReady) {
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
    }
  }, [blogId]);

  if (isLoading) {
    return (
      <div class="center">
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <BlogDetailPage
        title={blog.title}
        author={blog.author}
        body={blog.body}
        comments={blog.comments}
        blogId={blogId}
      />
    );
  }
}

export default BlogPage;
