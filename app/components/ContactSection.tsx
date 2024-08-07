"use client";
import Image from "next/image";
import H1 from "./H1";

export default function ContactSection() {
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
          <div className="">
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

        <form className="flex-1 flex flex-col gap-8">
          <input
            type="text"
            className="border p-4 border-l-0 border-t-0 text-white bg-transparent"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="border p-4 border-l-0 border-t-0 text-white  bg-transparent"
            placeholder="Email"
          />
          <textarea
            className="border p-4 border-l-0 border-t-0 text-white  bg-transparent"
            rows={4}
            placeholder="Message"
          ></textarea>
          <button className="bg-slate-100 shadow-lg text-black p-3 hover:bg-slate-200">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
