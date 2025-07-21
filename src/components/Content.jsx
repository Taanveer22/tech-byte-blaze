// Content component-------------------------
import { useLoaderData } from "react-router-dom";
import placeholderImg from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, tags, url, body_html } = blog;

  return (
    <div className="max-w-4xl mx-auto transition-all duration-300 p-6 rounded-xl shadow-lg hover:shadow-xl bg-white dark:bg-gray-800 group">
      <img
        className="object-cover w-full rounded-xl h-64 shadow-md mb-6 transition-transform duration-500 hover:scale-[1.02]"
        src={cover_image || placeholderImg}
        alt={title}
      />
      
      <div className="flex flex-wrap gap-2 py-4 border-t border-gray-200 dark:border-gray-700 border-dashed">
        {tags && tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-800 dark:text-purple-200 shadow-sm hover:shadow-md transition-shadow"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="space-y-4 mt-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={url}
          className="text-3xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
        >
          {title}
        </a>

        <div className="prose dark:prose-invert max-w-none prose-lg prose-headings:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300 prose-img:rounded-xl prose-img:shadow-md">
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;