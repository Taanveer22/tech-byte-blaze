import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {
  // console.log(blog);
  const { id, cover_image, title, description, published_at } = blog;
  return (
    <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 transition border-2 border-primary hover:border-secondary hover:scale-105">
      <Link to={`/blog/${id}`}>
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
          src={cover_image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400 dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
