"use client";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import H1 from "./H1";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = "service_9ovx3ib";
    const templateID = "template_197v79i";
    const userID = "u_-cmO1uMfpeSiaWO";

    emailjs.sendForm(serviceID, templateID, e.currentTarget, userID).then(
      (result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log(error.text);
        setStatus("Failed to send the message. Please try again.");
      }
    );

    // emailjs
    //   .send(serviceID, templateID, formData)
    //   .then((response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //     setStatus("Message sent successfully!");
    //     setFormData({ name: "", email: "", message: "" });
    //   })
    //   .catch((error) => {
    //     console.error("FAILED...", error);
    //     setStatus("Failed to send the message. Please try again.");
    //   });
  };

  return (
    <section
      id="section-contact"
      className="w-full px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg-contact-section.png')" }}
    >
      <H1 label="Contact" />
      <div className="flex flex-col md:flex-row mt-16 gap-10 md:gap-32">
        <div className="w-[320px] text-white flex flex-col justify-between">
          <div>
            <h1 className="text-6xl  relative">
              Let's Work Together{" "}
              <Image
                src={"/icons/arrow-down.png"}
                width={40}
                height={40}
                alt="arrow down"
                className="absolute bottom-3 right-0"
              />
            </h1>
            <p className="text-slate-300 font-light mt-8">
              Want to get in touch? I'd love to hear from you. Here's how you
              can reach me...
            </p>
          </div>
          <div>
            <p>Follow me:</p>
            <ul className="mt-4 flex gap-6">
              <li>
                <a href="https://github.com/joshuabriones" target="_blank">
                  <Image
                    src={"/icons/github.png"}
                    width={40}
                    height={40}
                    alt="github"
                    className="hover:opacity-70 transition-opacity duration-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/joshua-briones2003/"
                  target="_blank"
                >
                  <Image
                    src={"/icons/linkedin.png"}
                    width={40}
                    height={40}
                    alt="linkedin"
                    className="hover:opacity-70 transition-opacity duration-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://discordapp.com/users/854580379754430475"
                  target="_blank"
                >
                  <Image
                    src={"/icons/discord.png"}
                    width={40}
                    height={40}
                    alt="discord"
                    className="hover:opacity-70 transition-opacity duration-300"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="flex-1 flex flex-col gap-8" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="border p-4 border-l-0 border-t-0 text-white bg-transparent"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="border p-4 border-l-0 border-t-0 text-white  bg-transparent"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className="border p-4 border-l-0 border-t-0 text-white  bg-transparent"
            rows={4}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-slate-100 shadow-lg text-black p-3 hover:bg-slate-200"
          >
            Send
          </button>
          {status && <p className="mt-4 text-white">{status}</p>}
        </form>
      </div>
    </section>
  );
}
