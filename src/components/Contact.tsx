import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks";
import { slideIn, textVariant } from "../utils/motion";
import { PhoneCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { emailSent } from "../assets";

const Contact = () => {
  const { ref, animation } = useScrollAnimation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        `${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`,
        {
          client_name: form.name,
          client_email: form.email,
          message: form.message,
        },
        { publicKey: `${process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY}` }
      )
      .then(
        () => {
          setIsLoading(false);
          //set success toast message
          toast.success("Message sent successfully", {
            icon: ({ theme, type }) => (
              <img
                src={emailSent}
                style={{ marginRight: "0.25rem" }}
                width={35}
                height={35}
                alt="email sent"
              />
            ),
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsLoading(false);
          console.log(error);
          //set error toast message
          toast.error("Oops! Failed to sent. Please try again.", {
            icon: false,
          });
        }
      );
  };

  return (
    <section ref={ref} className="section contact">
      <div className="contact__col-1">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate={animation}
        >
          <h4 className="sub-heading">Get in Touch</h4>
          <h1 className="heading">Contact.</h1>
        </motion.div>
        <motion.div
          variants={slideIn({
            direction: "right",
            type: "tween",
            delay: 0.3,
            duration: 0.6,
          })}
          initial="hidden"
          animate={animation}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact__form form"
          >
            <div className="form__group">
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="form__input"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="form__input"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="message" className="form__label">
                Message
              </label>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me something"
                className="form__input"
                required
              />
            </div>
            <div className="form__group">
              <button
                type="submit"
                className={`btn form__btn btn--primary ${
                  isLoading ? "" : "btn--animated"
                } `}
                disabled={isLoading}
              >
                {isLoading ? (
                  <p>
                    Sending<span className="dots">...</span>{" "}
                  </p>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn({
          direction: "left",
          type: "tween",
          delay: 0.3,
          duration: 0.5,
        })}
        initial="hidden"
        animate={animation}
        className="contact__col-2"
      >
        <PhoneCanvas />
      </motion.div>
    </section>
  );
};

export default Contact;
