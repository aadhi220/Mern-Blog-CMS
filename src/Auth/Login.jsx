"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { loginApi } from "../Services/AllAPI";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (email && password) {
      try {
        const result = await loginApi(userData);
        if (result.status === 200) {
          toast.success("Login successful");
          sessionStorage.setItem(
            "existingUser",
            JSON.stringify(result.data.existingUser)
          );
          sessionStorage.setItem("token", result.data.token);
          setUserData({
            email: "",
            password: "",
          });
          navigate("/");
        } else {
          toast.error("user not found");
          // console.log(result);
        }
      } catch (error) {
        console.log(error);
        toast.error("Login failed");
      }
    } else {
      alert("please fill completely!!");
    }
  };
  return (
    <div className="flex h-[100vh] justify-center items-center bg-slate-100">
      <form
        onSubmit={(e) => HandleSubmit(e)}
        className="flex flex-1 max-w-md bg-slate-50 shadow-xl px-[1rem] py-[2rem] rounded-lg  flex-col gap-4"
      >
        <div className="flex flex-col items-center">
          <Link to={"/"} className="text-3xl my-5">
            RateLab
          </Link>
          <p className="opacity-70">Welcome, Sign in to your Account</p>
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="email4" value=" Your email" />
          </div>

          <TextInput
            id="email4"
            type="email"
            icon={HiMail}
            placeholder="name@gmail.com"
            value={userData.email || ""}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type={showPassword ? "text" : "password"}
            value={userData.password || ""}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            required
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex  items-center gap-2">
            <Checkbox
              id="pass"
              onChange={() => setShowPassword(!showPassword)}
            />
            <Label htmlFor="pass">Show Password</Label>
          </div>
          {/* <Link
            to={"/forgotPassword"}
            className="text-blue-700 hover:underline"
          >
            Forgot Password?
          </Link> */}
        </div>
        <div className="flex items-center gap-2">
          <span>Don't have an account? </span>
          <Link to={"/register"} className="text-blue-700 hover:underline ">
            Sign up
          </Link>
        </div>
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}
