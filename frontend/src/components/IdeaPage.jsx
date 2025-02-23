import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../urls";

const IdeaPage = () => {
  const navigate = useNavigate();
  const [ideas, setIdeas] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/ideas`
        );
        setIdeas(response.data);
      } catch (error) {
        toast.error("Error fetching ideas");
      }
    };

    fetchIdeas();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/api/ideas/submit`,
        {
          name: form.name,
          email: form.email,
          title: form.title,
          description: form.description,
        }
      );
      setIdeas([...ideas, response.data.newIdea]);
      toast.success("Idea submitted successfully");
      setForm({
        name: "",
        email: "",
        title: "",
        description: "",
      });
      navigate("/ideas");
    } catch (error) {
      toast.error("Error submitting idea");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/international-women-s-day-celebration-equal-right-digital-art-style_23-2151368413.jpg?size=626&ext=jpg')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        opacity: "1",
        height: "100%",
      }}
    >
      <section className=" bg-transparent py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-300 mb-4">
            Empowering Ideas
          </h1>
          <p className="text-lg text-slate-200 mb-6">
            Share your innovative ideas and inspire others. Together, we can
            make a difference.
          </p>
          <a href="#submit-idea">
            <button className="btn btn-lg bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-200">
              Submit Your Idea
            </button>
          </a>
        </div>
      </section>

      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">
            Featured Ideas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ideas.map((idea, i) => (
              <div
                key={i}
                className="bg-white p-4 hover:border-pink-600 hover:border-2 hover:text-pink-300 hover:scale-110 duration-500 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 capitalize">
                  <span className="text-violet-700">Title:</span> {idea.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  <span className="text-violet-700 font-semibold">Idea:</span>{" "}
                  {idea.description}
                </p>
                <p className="text-gray-600 font-bold">
                  Submitted by: {idea.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="submit-idea" className="bg-pink-200 opacity-85 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Submit Your Idea
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Have a groundbreaking idea? Share it with our community and let's
            make it happen together.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Idea Title"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Idea"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-lg bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-200"
            >
              Submit Idea
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default IdeaPage;
