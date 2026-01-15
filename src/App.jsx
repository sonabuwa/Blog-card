import React from "react";
import image from "../blog-card/blog-card/img/spacejoy-YqFz7UMm8qE-unsplash.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col  bg-white mt-4 border rounded-lg shadow w-80">
        <img src={image} className="w-80 rounded-t-lg" />
        <div className="flex flex-col gap-4 justify-start items-start pt-7 pl-4">
          <p className="border-2 border-green-200 rounded-full bg-green-400/10 px-2 py-1 ml-2 text-sm fonr-medium text-[#16803E] inset-ring inset-ring-green-500/20">
            Interior
          </p>
          <h1 className="font-semibold text-lg">
            Top 5 Living Room Inspirations
          </h1>
          <p className="text-[#525252]">
            Curated vibrants colors for your living, make it pop & calm in the
            same time. Read more
          </p>
          <span className="pb-7">
            <a
              href="#"
              className="text-[#4438CA] inline-flex items-center gap-2"
            >
              Read more <FaArrowRightLong className="text-[#4438CA]" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
