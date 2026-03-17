"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ACCESS_KEY = import.meta.env.VITE_CONTACT_FORM_ACCESS_KEY;
const EMAIL_TO = import.meta.env.VITE_RECEIVER_EMAIL;

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
    botcheck: "",
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!form.fullName.trim()) return "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return "Enter a valid email";
    if (form.message.length < 10)
      return "Message must be at least 10 characters";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) return toast.error(error);

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          email_to: EMAIL_TO,
          ...form,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent ✨");
        setForm({ fullName: "", email: "", message: "", botcheck: "" });
      } else {
        toast.error("Something went wrong");
      }
    } catch {
      toast.error("Network error");
    }

    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-8 mx-auto px-4 sm:px-0 max-w-xl"
    >
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        value={form.botcheck}
        onChange={(e) => setForm({ ...form, botcheck: e.target.value })}
      />

      {/* Heading */}
      <div className="space-y-2 text-center">
        <h2 className="font-semibold text-neutral-900 text-2xl sm:text-4xl">
          Let’s work together
        </h2>
        <p className="text-neutral-500 text-sm">
          Turn your idea into a real product.
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-6">
        <input
          type="text"
          placeholder="Your name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className="bg-transparent py-3 border-neutral-300 focus:border-neutral-900 border-b focus:outline-none w-full placeholder:text-neutral-400 text-sm sm:text-base transition"
        />

        <input
          type="email"
          placeholder="Work email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-transparent py-3 border-neutral-300 focus:border-neutral-900 border-b focus:outline-none w-full placeholder:text-neutral-400 text-sm sm:text-base transition"
        />

        <textarea
          rows={4}
          placeholder="Tell me what you're building..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="bg-transparent py-3 border-neutral-300 focus:border-neutral-900 border-b focus:outline-none w-full placeholder:text-neutral-400 text-sm sm:text-base transition resize-none"
        />
      </div>

      {/* Button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        disabled={loading}
        className="flex justify-center items-center gap-2 bg-neutral-900 hover:bg-neutral-800 py-3 rounded-full w-full text-white text-sm sm:text-base transition"
      >
        {loading ? (
          <span className="border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin" />
        ) : (
          "Send message"
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
