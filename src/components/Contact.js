// src/components/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-10 py-20"
    >
      <h2 className="text-4xl font-bold mb-6 text-green-400">Contact Me</h2>
      <form
        action="https://formspree.io/f/YOUR_FORM_ID" // replace with your Formspree ID
        method="POST"
        className="w-full max-w-md flex flex-col space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:border-green-400 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:border-green-400 outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:border-green-400 outline-none"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 rounded bg-green-500 text-black font-bold hover:bg-green-400 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
