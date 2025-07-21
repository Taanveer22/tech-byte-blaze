import { Link } from "react-router-dom";
import placeholderImg from "../assets/404.jpg";
import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { cover_image, title, description, published_at } = blog;
  
  return (
    <div className="relative group h-[500px]"> {/* Fixed height container */}
      <Link
        to={`/blog/${blog.id}`}
        className="block h-full max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-secondary/20 flex flex-col"
      >
        {/* Image section with fixed height */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={cover_image || placeholderImg}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content section that grows to fill remaining space */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-800 line-clamp-2 mb-1">
              {title}
            </h3>
          </div>
          <span className="text-xs text-gray-500">
            {new Date(published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
          <p className="mt-3 text-gray-600 line-clamp-3 flex-grow">
            {description}
          </p>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Read More
            </span>
          </div>
        </div>
      </Link>

      {deletable && (
        <button
          onClick={() => handleDelete(blog.id)}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-red-500 transition-colors duration-200 group/delete"
          aria-label="Delete post"
        >
          <MdDeleteForever
            size={20}
            className="text-red-500 group-hover/delete:text-white transition-colors"
          />
        </button>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  deletable: PropTypes.bool,
  handleDelete: PropTypes.func,
};

export default BlogCard;