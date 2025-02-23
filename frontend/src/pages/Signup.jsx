// src/pages/Signup.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import signupHero from "../images/login-hero.gif";
import { baseUrl } from "../urls";


function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
      bio: data.bio,
      profile: data.profile,
      phonenumber: data.phonenumber,
    };
    await axios
      .post(`${baseUrl}/user/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully..");

          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <section
      id="signup"
      className="min-h-screen flex items-center justify-center bg-gray-100 py-12"
    >
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden justify-around ">
        <div className="md:w-1/2 w-full p-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-6">
            <Link to="/">SheManages</Link>
          </h1>
          <h3 className="text-2xl font-semibold mb-4">Hello!</h3>
          <p className="mb-6 text-gray-600">Sign up to get started</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                placeholder="your Name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                id="username"
                {...register("username", { required: true })}
              />
              <br />
              {errors.name && (
                <div className="text-sm text-orange-400">
                  This field is required
                </div>
              )}
            </div>
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
            <div className="mb-4">
              <label htmlFor="number" className="block text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                placeholder="Your Phone "
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                id="number"
                {...register("phonenumber", { required: true })}
              />
              <br />
              {errors.phonenumber && (
                <div className="text-sm text-orange-400">
                  This field is required
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="textarea" className="block text-gray-700 mb-2">
                Bio
              </label>
              <input
                placeholder="write about yourself!"
                type="textarea"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                id="textarea"
                {...register("bio", { required: true })}
              />
              <br />
              {errors.bio && (
                <div className="text-sm text-orange-400">
                  This field is required
                </div>
              )}{" "}
            </div>
            <div className="mb-4">
              <label htmlFor="dp" className="block text-gray-700 mb-2">
                Profile Picture
              </label>
              <input
                placeholder="url"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                id="dp"
                {...register("profile", { required: true })}
              />
              <br />
              {errors.profile && (
                <div className="text-sm text-orange-400">
                  This field is required
                </div>
              )}{" "}
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" id="terms-conditions" />
              <label htmlFor="terms-conditions" className="text-gray-700">
                I agree with the Terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200"
            >
              Sign up
            </button>

            <p className="mt-4 text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-pink-600">
                Sign In
              </Link>
            </p>
          </form>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            className="w-full h-full object-cover"
            src={signupHero}
            alt="signup-hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Signup;
