import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import ReactMarkdown from "react-markdown";

const Content = () => {
  const blogsData = useLoaderData();
  const { cover_image, title, tags, body_markdown, url } = blogsData;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-6">
      <div className="space-y-6 mb-8">
        {/* ✅ Responsive image */}
        <img
          src={cover_image || placeHolderImage}
          alt={title}
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow"
        />

        {/* ✅ Tags section */}
        <div className="flex flex-wrap gap-2 items-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 text-gray-800 text-sm sm:text-base rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* ✅ Title */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 underline underline-offset-4 decoration-gray-400 hover:text-gray-900 hover:decoration-gray-700 transition-all duration-300 tracking-wide"
        >
          {title}
        </a>
      </div>

      {/* ✅ Markdown content styled with built-in typography */}
      <div className="prose max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:underline">
        <ReactMarkdown>{body_markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Content;
