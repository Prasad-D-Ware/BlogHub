import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

//appbar component
export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"} className="flex justify-center flex-col">
        {/* name of the site */}
        <div>BlogHub</div>
      </Link>
      <div>
        {/* button for publishing  */}
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4"
          >
            New
          </button>
        </Link>
        {/* user avatar with initial */}
        <Avatar size={"big"} name="Prasad" />
      </div>
    </div>
  );
};
