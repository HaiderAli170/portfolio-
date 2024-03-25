import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Notification from "../notification/notification";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setstate] = useState(false);
  useEffect(() => {
    let timer:any;
    if (state) {
      timer = setTimeout(() => {
        setstate(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [state]);
  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_y9supza",
        "template_z1e8q88",
        {
          name,
          email,
          message,
        },
        "7TYJwnJSDjnPs_rxQ"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setMessage("");
         setName('')
          setstate(true)
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div
      id="contact"
      className="mx-auto min-w-0 shadow-md w-full px-4 lg:px-6 bg-[url('/src/assets//images/contact.jpg')] bg-cover bg-center  py-20"
    >
      <section className="mb-32">
        <div className="flex flex-wrap px-2 lg:px-2">
          {state && <Notification />}
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-4">
            <h1 className=" py-4 cursor-pointer tracking-wide hover:decoration-sky-600 font-medium text-4xl text-white font-poppin rounded rounder-lg animate-pulse">
              Let's Connect
            </h1>
            <p className="mb-6 text-white font-poppin dark:text-neutral-300">
              Have a project in mind, a question, or just want to say hi? I'm
              all ears. Connecting with fellow professionals, clients, and
              creative minds is what drives me forward. Drop me a line, and I’ll
              get back to you as soon as I can.
            </p>
            <p className="mb-2 text-white font-poppin dark:text-neutral-300">
              Based in Islamabad,Pakistan, open to the world.
            </p>
            <p className="mb-2 text-white font-poppin dark:text-neutral-300">
              +92-323-5903817
            </p>
            <p className="mb-2 text-white font-poppin dark:text-neutral-300">
              Haiderium8@gmail.com
            </p>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <form onSubmit={handleSubmit}>
              <div className=" mb-6">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border text-white font-poppin tracking-wide border-white bg-darkLow py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                  id="exampleInput90"
                  placeholder="Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className=" mb-6">
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full border font-poppi text-white tracking-wide border-white bg-darkLow  rounded   py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                  id="exampleInput91"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" mb-6">
                <textarea
                  className="peer block min-h-[auto] w-full border font-poppin text-white tracking-wide border-white bg-darkLow  rounded  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Your message"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="mb-6 inline-block hover:bg-black w-full rounded border font-poppin tracking-wide border-white bg-darkLow  bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
