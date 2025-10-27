import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[calc(100vh-124px)] bg-blue-300">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Welcome to ByteBlaze</h1>
            <p className="my-5">
              ByteBlaze is the bridge between the complex world of technology
              and the curious minds eager to understand it
            </p>
            <div className="flex gap-4 items-center justify-center">
              <Link to="/blogs" className="btn btn-primary">
                Read Blogs
              </Link>
              <Link to="/bookmarks" className="btn btn-primary">
                See Bookmarks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
