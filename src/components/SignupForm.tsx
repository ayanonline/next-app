"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupForm = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/signup`,
        data: user,
      });

      console.log("Signup success", response.data);

      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2 ">
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="fitstname">First name</label>
          <input
            type="text"
            id="fitstname"
            className="border-2 px-3 py-2 outline-none"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, first_name: e.target.value };
              })
            }
            value={user.first_name}
          />
        </div>

        <div className="flex flex-col w-[48%]">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            className="border-2 px-3 py-2 outline-none"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, last_name: e.target.value };
              })
            }
            value={user.last_name}
          />
        </div>
      </div>
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
      <div className="flex flex-col">
        <label htmlFor="cpassword">Confirm password</label>
        <input
          type="password"
          id="cpassword"
          className="border-2 px-3 py-2 outline-none"
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, confirmPassword: e.target.value };
            })
          }
          value={user.confirmPassword}
        />
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="border bg-blue-500 px-3 py-2 text-white text-xl"
      >
        Register
      </button>
    </form>
  );
};

export default SignupForm;
