import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

const BlogDetail = () => {
  const blogDetailData = useLoaderData();
  console.log(blogDetailData);
  const [tabIndex, setTabIndex] = useState(0);
  const {
    title,
    comments_count,
    reading_time_minutes,
    public_reactions_count,
    published_at,
  } = blogDetailData;
  return (
    <>
      <div className="max-w-5xl px-6 py-12 my-12 mx-auto space-y-12 bg-sky-200">
        {/* ==========article============== */}
        <article className=" text-gray-900 p-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
            <div className="flex flex-col justify-center items-start text-base text-gray-600">
              <p>*** {new Date(published_at).toLocaleDateString()}</p>
              <p>*** {reading_time_minutes} min read</p>
              <p>*** {comments_count} comments</p>
              <p>*** {public_reactions_count} views</p>
            </div>
          </div>
        </article>
        {/* ==========tab========== */}
        <div className="flex items-center justify-center overflow-x-auto overflow-y-hidden text-lg font-semibold text-gray-800">
          <Link
            to="content"
            onClick={() => setTabIndex(0)}
            className={`${
              tabIndex === 0 ? "border-2 border-gray-800" : "border-0"
            }flex items-center px-6 py-3 space-x-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Content</span>
          </Link>
          <Link
            to="author"
            onClick={() => setTabIndex(1)}
            className={`${
              tabIndex === 1 ? "border-2 border-gray-800" : "border-0"
            }flex items-center px-6 py-3 space-x-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Author</span>
          </Link>
          <FaBookmark size={30} className="text-red-500"></FaBookmark>
        </div>
        {/* ====dynamic content===== */}
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default BlogDetail;
