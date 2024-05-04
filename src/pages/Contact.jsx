import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-300">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-200 mb-8">
        Have questions or feedback? We'd love to hear from you! Please fill out
        the form below and we'll get back to you as soon as possible.
      </p>
      <form className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-100 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded w-full px-4 py-2"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-100 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded w-full px-4 py-2"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-100 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border rounded w-full px-4 py-2 resize-none"
            rows="5"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
