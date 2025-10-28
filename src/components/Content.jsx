import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import ReactMarkdown from "react-markdown";

const Content = () => {
  const blogsData = useLoaderData();
  const { cover_image, title, tags, body_markdown } = blogsData;
  return (
    <>
      <div className="max-w-5xl mx-auto p-6">
        <div className="space-y-4 mb-6">
          <img
            className="w-full rounded h-64"
            src={cover_image || placeHolderImage}
          />
          <div className="flex gap-2 items-center border-gray-400">
            {tags.map((tag) => (
              <div tag={tag} className="px-3 py-1 rounded-sm text-gray-900">
                #{tag}
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <ReactMarkdown>{body_markdown}</ReactMarkdown>
      </div>
    </>
  );
};

export default Content;
