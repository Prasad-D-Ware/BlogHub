import { useNavigate } from "react-router-dom";
import { Quote } from "../components/Quote";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="hidden lg:block">
        <Quote quote="BlogHub : One stop for your Blogging endeavours" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center flex-col">
          <div className="text-3xl font-extrabold p-3 flex justify-center ">
            BlogHub
          </div>
          <div className="flex">
            <button
              onClick={() => {
                navigate("/signup");
              }}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                navigate("/signin");
              }}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
