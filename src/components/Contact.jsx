import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   ).then(() => {
        alert("Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <section
      id="contact"
      className="py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[4px] text-gray-500 dark:text-gray-400 mb-4">
          Let's Connect
        </p>

        <h2 className="text-center text-5xl md:text-6xl font-light mb-6 text-black dark:text-white">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="backdrop-blur-lg bg-white/70 dark:bg-slate-800 border border-white/40 dark:border-slate-700 rounded-3xl shadow-lg p-8"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-xl p-4 mb-4"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-xl p-4 mb-4"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-black dark:text-white rounded-xl p-4"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 rounded-xl mt-4 hover:bg-blue-600 transition"
            >
              SEND MESSAGE
            </button>
          </form>

          <div className="space-y-6">

            <div className="border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-2xl p-6 flex gap-4 text-black dark:text-white">
              <FaMapMarkerAlt />
              <span>Jalaun UP, India</span>
            </div>

            <div className="border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-2xl p-6 flex gap-4 text-black dark:text-white">
              <FaEnvelope />
              <span>akilk6388@gmail.com</span>
            </div>

            <div className="border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-2xl p-6 flex gap-4 text-black dark:text-white">
              <FaPhone />
              <span>+91 6388179488</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;