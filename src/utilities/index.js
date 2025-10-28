import toast from "react-hot-toast";

// get items
const getFromLocalStorage = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

// set items
const setToLocalStorage = (blogDetailData) => {
  // console.log(blogDetailData);
  let blogs = getFromLocalStorage();
  const isExist = blogs.find(
    (blogElement) => blogElement.id === blogDetailData.id
  );
  if (isExist) {
    toast.error("bookmark already added");
  } else {
    blogs.push(blogDetailData);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    toast.success("successfully bookmark added");
  }
};

// delete items
const deleteFromLocalStorage = (id) => {
  console.log(id);
  const blogs = getFromLocalStorage();
  const remainingBlogs = blogs.filter((blogElement) => blogElement.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remainingBlogs));
  toast.success("delete bookmark done");
};

// export functions
export { getFromLocalStorage, setToLocalStorage, deleteFromLocalStorage };
