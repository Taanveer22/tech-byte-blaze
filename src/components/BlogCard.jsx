import { Link } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
const BlogCard = ({ blog }) => {
  // console.log(blog);
  const { id, cover_image, title, description, published_at } = blog;
  return (
    <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline  transition p-3 border-2 border-primary hover:border-secondary hover:scale-105">
      <Link to={`/blogdetail/${id}`}>
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500 "
          src={cover_image || placeHolderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400 ">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
