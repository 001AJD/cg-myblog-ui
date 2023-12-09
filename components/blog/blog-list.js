import { useState, useEffect } from 'react';
import BlogItem from './blog-item';
import classes from './blog-list.module.css';
import Card from '../ui/card';

function BlogList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBlogs, setLoadedBlogs] = useState([]);
  const summary =
    'Consequat et irure incididunt exercitation.Ad mollit qui aliqua voluptate in reprehenderit aliqua laboris dolore laboris.';
  const image = 'extrovert-event';

  // useEffect Executes the callback function after the dependencies are updated/modified.
  // In this case there are no dependency hence will execute the function once.
  useEffect(() => {
    fetch(
      'https://us-central1-cg-myblog-api.cloudfunctions.net/api/blogs/getBlogs',
      {
        method: 'GET',
        headers: {
          'api-key': 'A098',
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP Error from API');
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedBlogs(data);
      })
      .catch((error) => {
        console.error('Error fetching data :', error);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2 className="center">Loading...</h2>
      </div>
    );
  } else {
    return (
      // <ul className={classes.gridLayout}>
      //   {loadedBlogs.map((blog) => {
      //     return <BlogItem key={blog.id} data={blog} />;
      //   })}
      // </ul>
      <div className={classes.gridLayout}>
        {loadedBlogs.map((blog) => {
          return (
            <Card
              title={blog.title}
              summary={summary}
              image={image}
              id={blog.id}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogList;
