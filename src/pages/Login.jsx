import React, { useState } from "react";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform API request for user authentication
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      // Redirect to the home page
      window.location.href = "/";
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="w-full max-w-md bg-transparent backdrop-blur-sm backdrop-brightness-90 border-slate-500 border-2 rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-300 mb-4">Login</h2>
        <form onSubmit={handleSubmit} class="flex flex-col">
          <input
            type="email"
            class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div class="flex items-center justify-between flex-wrap">
            <label
              for="remember-me"
              class="text-sm text-gray-300 cursor-pointer"
            >
              <input type="checkbox" id="remember-me" class="mr-2" />
              Remember me
            </label>
            <a href="#" class="text-sm text-blue-500 hover:underline mb-0.5">
              Forgot password?
            </a>
            <p class="text-gray-300 mt-4">
              {" "}
              Don't have an account?{" "}
              <a
                href="#"
                class="text-sm text-blue-500 -200 hover:underline mt-4"
              >
                Signup
              </a>
            </p>
          </div>
          <button
            type="submit"
            class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
// Path: src/pages/Home.jsx
