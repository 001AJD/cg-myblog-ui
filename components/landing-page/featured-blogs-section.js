import classes from "./featured-blogs-section.module.css";
import Card from "../ui/card";
import { useEffect, useState } from "react";

function FeaturedBlogsSection() {
  const apiURL = process.env.NEXT_PUBLIC_MYBLOGAPI + "/getfeaturedblogs";
  const apiKey = process.env.NEXT_PUBLIC_MYBLOG_API_KEY;
  const images = ["extrovert-event", "background1", "coding-event"];
  const summary =
    "Deserunt aliquip aute adipisicing culpa nulla velit id incididunt anim incididunt reprehenderit excepteur.";

  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    getfeaturedBlogs();
    console.log(featuredBlogs);
  }, []);

  function getfeaturedBlogs() {
    console.log(apiURL);
    fetch(apiURL, {
      method: "GET",
      headers: {
        "api-key": apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        return response.json();
      })
      .then((data) => {
        setFeaturedBlogs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (featuredBlogs.length === 0) {
    return (
      <div>
        <h2 className="center">Loading...</h2>
      </div>
    );
  } else {
    return (
      <div className={classes.featuredBlogs}>
        {featuredBlogs.map((item, index) => {
          return (
            <Card
              key={item.title}
              id={item.blogId}
              title={item.title}
              image={images[index]}
              summary={summary}
            />
          );
        })}
      </div>
    );
  }
}

export default FeaturedBlogsSection;
