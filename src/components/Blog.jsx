import React from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Fostering Growth Through Meaningful Discussions",
      image: blog1,
    },
    { id: 2, title: "The Evolution of Modern Computers", image: blog2 },
    { id: 3, title: "Emerging Trends in Technology Innovation", image: blog3 },
  ];

  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12"
      id="testimonial"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralGrey font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Building meaningful relationships and prioritizing customer well-being
          has become the new standard in successful marketing strategies.
        </p>
      </div>

      {/* all blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="mx-auto relative mb-12 cursor-pointer group"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-md transform transition duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-neutralGrey">
                {blog.title}
              </h3>
              <div className="flex items-center gap-8 flex-wrap mt-2">
                <a
                  href=""
                  className="font-bold text-brandPrimary hover:text-neutral-700"
                >
                  Readmore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905l15.2929 6.10615c15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
