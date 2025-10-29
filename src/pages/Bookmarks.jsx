import { useEffect, useState } from "react";
import { deleteFromLocalStorage, getFromLocalStorage } from "../utilities";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  // console.log(blogs);
  useEffect(() => {
    const storedBlogs = getFromLocalStorage();
    setBlogs(storedBlogs);
  }, []);

  const handleDeleteBookmark = (id) => {
    deleteFromLocalStorage(id);
    const storedBlogs = getFromLocalStorage();
    setBlogs(storedBlogs);
  };

  if (blogs.length < 1) return <EmptyState message={'No Bookmarks Available'}></EmptyState>;
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-12">
      {blogs.map((blog) => (
        <BlogCard
          blog={blog}
          key={blog.id}
          deletable={true}
          handleDeleteBookmark={handleDeleteBookmark}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
