import classes from "./featured-blogs-section.module.css";
import Card from "../ui/card";

function FeaturedBlogsSection() {
  const DUMMY_FEATURED_BLOG = [
    {
      id: "6541026ba2711aeae11ccab8",
      title: "My Blog Title",
      image: "introvert-event",
      summary:
        "Incididunt esse cupidatat non laboris id. Est ullamco laborum veniam labore occaecat. Ut quis ipsum magna adipisicing in non quis magna culpa sunt qui duis official",
    },
    {
      id: "6541026ba2711aeae11ccab8",
      title: "My Blog Title2",
      image: "coding-event",
      summary:
        "Incididunt esse cupidatat non laboris id. Est ullamco laborum veniam labore occaecat. Ut quis ipsum magna adipisicing in non quis magna culpa sunt qui duis official",
    },
    {
      id: "6541026ba2711aeae11ccab8",
      title: "My Blog Title3",
      image: "extrovert-event",
      summary:
        "Incididunt esse cupidatat non laboris id. Est ullamco laborum veniam labore occaecat. Ut quis ipsum magna adipisicing in non quis magna culpa sunt qui duis official",
    },
  ];

  return (
    <div className={classes.featuredBlogs}>
      {DUMMY_FEATURED_BLOG.map((item) => {
        return (
          <Card
            key={item.title}
            id={item.id}
            title={item.title}
            image={item.image}
            summary={item.summary}
          />
        );
      })}
    </div>
  );
}

export default FeaturedBlogsSection;
