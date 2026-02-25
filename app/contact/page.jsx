"use client";

import React from "react";
// import { contactAction } from "./contact.action";

const Contact = () => {
//    const [state, formAction, isPending] = React.useActionState(
//     contactAction,
//     null
//   )
function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // formAction(formData);
    // console.log(Object.fromEntries(formData.entries()));
    //when the form is submit the form input is empty
        e.target.reset();


        if (formData.get("fullname")?.toString().trim() === "" ||
            formData.get("email")?.toString().trim() === "" ||
            formData.get("message")?.toString().trim() === "") {
                console.error("All fields are required.");
            return;
        }
  }


  return (
    <div className="flex items-center justify-center h-screen flex-col gap-3 px-4 py-2 w-full max-w-2xl mt-4 mx-auto border border-gray-200">
      <h1 className="text-3xl font-semibold mb-5">Contact Us</h1>

      <form  className="w-full" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="fullname"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            id="name"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            id="email"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            rows={5}
            id="message"
          ></textarea>
        </div>
        <button type="submit" className="mt-4 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800 cursor-pointer">
            Send Data
        </button>



        {/* <button type="submit" disabled={isPending} className="mt-4 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800">
        {isPending ? "Sending..." : "Send"}
      </button> */}

        {/* {state?.error && <p className="text-red-500 mt-2">{state.error}</p>}
        {state?.success && <p className="text-green-500 mt-2">{state.success}</p>} */}
      </form>
    </div>
  );
};

export default Contact;