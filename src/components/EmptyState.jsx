import { Link } from "react-router-dom";

const EmptyState = ({ message }) => {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center min-h-[calc(100vh-124px)]">
        <h1 className="text-2xl font-medium text-red-500">{message}</h1>
        <Link to="/blogs" className="btn btn-success">
          Browse Blogs
        </Link>
      </div>
    </>
  );
};

export default EmptyState;
