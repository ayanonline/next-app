"use client";
import { setAuthenticated } from "@/store/slices/userSlice";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
        withCredentials: true,
        data: user,
      });

      console.log("Loign success", response.data);
      toast.success("Succesfully loged in");
      Cookies.set("auth", "true");
      dispatch(setAuthenticated(true));
      router.push("/account");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="border-2 px-3 py-2 outline-none"
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
          value={user.email}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="border-2 px-3 py-2 outline-none"
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
          value={user.password}
        />
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="border bg-blue-500 px-3 py-2 text-white text-xl"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
