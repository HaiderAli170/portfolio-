import  { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Implement what you want to do with the form data here
    console.log({ name, email, message });
  };

  return (
    <div id='contact' className="mx-auto shadow-md w-full px-4 lg:px-6 bg-[url('/src/assets//images/contact.jpg')] bg-cover bg-center  py-20">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-4">
          <h1 className=" py-4 cursor-pointer tracking-wide hover:decoration-sky-600 font-medium text-4xl text-white font-poppin rounded rounder-lg animate-pulse">
                Contact
              </h1>
            <p className="mb-6 text-white font-poppin dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, modi accusantium ipsum corporis quia asperiores
              dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
              autem omnis fugiat perspiciatis? Ad, veritatis.
            </p>
            <p className="mb-2 text-white font-poppin dark:text-neutral-300">
              New York, 94126, United States
            </p>
            <p className="mb-2 text-white font-poppin dark:text-neutral-300">
              + 01 234 567 89
            </p>
            <p className="mb-2 text-white font-poppin dark:text-neutral-300">
              info@gmail.com
            </p>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border font-poppin tracking-wide border-white bg-darkLow py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                  id="exampleInput90"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  htmlFor="exampleInput90"
                  className="pointer-events-none absolute  tracking-wide   top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-poppin transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Name
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full border font-poppin tracking-wide border-white bg-darkLow  rounded   py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary"
                  id="exampleInput91"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="exampleInput91"
                  className="pointer-events-none  tracking-wide   absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-poppin transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>
              <div className="relative mb-6">
                <textarea
                  className="peer block min-h-[auto] w-full border font-poppin tracking-wide border-white bg-darkLow  rounded  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="pointer-events-none absolute  tracking-wide  top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white font-poppin transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Your message
                </label>
              </div>
               
              <button
                type="submit"
                className="mb-6 inline-block w-full rounded border font-poppin tracking-wide border-white bg-darkLow  bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
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

