/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      // Use EmailJS to send the email
      await emailjs.send("service_r8zjfmy", "template_yenlgl8", userInfo, "istWsLUr1dobLcgcr");
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-4xl font-bold mb-2 animate-bounce transition-all duration-300 hover:scale-105 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Contact Me
        </h1>
        <span className="text-center text-lg animate-pulse transition-all duration-300 hover:scale-105 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
          Please fill out the form below to contact me
        </span>
      </div>

      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
        >
          <h1 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 animate-pulse">
            Send Your Message
          </h1>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:bg-gray-100"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:bg-gray-100"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 hover:bg-gray-100"
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
            />
            {errors.message && <span className="text-red-500">This field is required</span>}
          </div>

          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 flex items-center justify-center transition-all"
          >
            <FaPaperPlane className="mr-2 animate-pulse" /> Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
