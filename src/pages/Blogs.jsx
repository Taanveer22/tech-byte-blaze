import { useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Spinner from "../components/Spinner";

const Blogs = () => {
  const blogsData = useLoaderData();
  // console.log(blogsData);
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Spinner></Spinner>;
  return (
    <div>
      <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 dark:bg-gray-50">
            <img
              src={blogsData[0].cover_image}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogsData[0].title}
              </h3>
              <span className="text-xs text-gray-400 dark:text-gray-600">
                {new Date(blogsData[0].published_at).toLocaleDateString()}
              </span>
              <p>{blogsData[0].description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogsData.slice(1, 19).map((blog) => (
              <BlogCard key={blog.id} blog={blog}></BlogCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
