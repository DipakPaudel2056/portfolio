import React from "react";
import prisma from "../lib/prisma";
import "./contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
const page = () => {
  async function createMessage(formData) {
    "use server";
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const email = formData.get("email");

    await prisma.message.create({
      data: {
        first_name,
        last_name,
        email,
        phone,
        message,
      },
    });
  }
  return (
    <>
      <div className="main">
        <div className="contact__header">
          <h1>GET IN TOUCH</h1>
          <p>Call: 0452450087</p>
          <p>Email: paudelsantosh508@gmail.com</p>
          <p>or fill out the form below and I will get back to you ASAP! </p>
          <br />
          <p>Perth, WA</p>
          <div className="social__icons">
            <FaFacebook /> 
            <FaInstagramSquare />
            <FaLinkedin />
          </div>
        </div>
        <div className="contact__body">
          <div className="contact__body__desc">
            <h3>I CAN&apos;T WAIT TO HEAR FROM YOU!</h3>
            <p>
              Since last 3 years i have spent all my time and effort learning
              concepts of web development and building scalable software
              solution. I have industry experience of 6 months and i also have
              completed 2 interns in the past all regarding the software
              engineering role. And at this moment i am excited to work for you.
              I love maths and programming. If it is hard problem or to
              integrate your system to cost effective architect. I am right here
              to help you out. Just send one message and we can talk over the
              phone to discuss more about the role
            </p>
          </div>

          <div className="contact__body__form">
            <form action={createMessage}>
              <input type="text" name="first_name" placeholder="Name*" />
              <input type="text" name="last_name" placeholder="Lastname*" />
              <input type="text" name="phone" placeholder="Phone*" />
              <input type="text" name="email" placeholder="email*" />
              <input type="text" name="message" placeholder="message*" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
