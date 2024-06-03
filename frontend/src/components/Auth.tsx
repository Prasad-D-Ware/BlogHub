import { Link, useNavigate } from "react-router-dom";
import { InputBox } from "./InputBox";
import { useState } from "react";
import { SignupInput } from "@prasadware/blogging-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      //alert user of failed req
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col text-center">
      <div className=" flex justify-center">
        <div>
          <div className=" px-10">
            <div className="font-extrabold text-3xl">Create an account</div>
            <div className="text-slate-500">
              {type === "signup"
                ? "Already have an account?"
                : "Dont have an account?"}

              <Link
                className="pl-2 underline"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signup" ? "SignIn" : "SignUp"}
              </Link>
            </div>
          </div>
          <div className="pt-4 text-left">
            {type === "signup" ? (
              <InputBox
                label="Name"
                placeholder="Prasad Ware"
                onChange={(e) => {
                  setPostInputs({ ...postInputs, name: e.target.value });
                }}
              />
            ) : null}

            <InputBox
              label="Email"
              placeholder="prasad@gmail.com"
              onChange={(e) => {
                setPostInputs({ ...postInputs, email: e.target.value });
              }}
            />

            <InputBox
              label="Password"
              placeholder="******"
              type="password"
              onChange={(e) => {
                setPostInputs({ ...postInputs, password: e.target.value });
              }}
            />
            <button
              onClick={sendRequest}
              className="w-full bg-black text-white mt-4 px-4 py-2 rounded-md"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
