// src/pages/Login.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import loginHero from "../images/login-hero.gif";
import { baseUrl } from "../urls";


function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${baseUrl}/user/login`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged In Successfully");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate("/");
          window.location.reload();
        }
        console.log("auth ", authUser);
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <section className="md:min-h-screen h-full flex items-center justify-center bg-gray-100 py-12">
      <div className="flex flex-col justify-around md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 w-full p-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-6">
            <Link to="/">SheManages</Link>
          </h1>
          <h3 className="text-2xl font-semibold mb-4">Log in.</h3>
          <p className="mb-6 text-gray-600">
            Log in with your data that you entered during your registration.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Your e-mail
              </label>
              <input
                placeholder="name@domain.com"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                id="email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <div className="text-sm text-orange-400">
                  This field is required
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="pwd" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                placeholder="at least 8 characters"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                id="pwd"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <div className="text-sm text-orange-400">
                  This field is required
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200"
            >
              Log in
            </button>

            <p className="mt-4 text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-pink-600">
                Sign Up
              </Link>
            </p>
            <p className="text-center mt-4">
              <a
                href="mailto:tiwariabhay6260@gmail.com?subject=Forgot Password for SheManages&body=Hey! Please help me out ASAP I forgot my password."
                className="text-pink-600"
              >
                Forgot Password?
              </a>
            </p>
          </form>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            className="w-full h-full object-cover"
            src={loginHero}
            alt="login-hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
