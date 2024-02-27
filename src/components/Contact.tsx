import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import { useScrollAnimation } from "../hooks";
import { slideIn } from "../utils/motion";
import { ShieldSphereCanvas } from "./canvas";

const Contact = () => {
  const {ref, animation} = useScrollAnimation();
  const formRef = useRef<HTMLFormElement>(null);
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
  };

  return (
      <section ref={ref} className="section contact">
        <motion.div
          variants={slideIn("right", "tween", 0.3, 0.6)}
          initial="hidden"
          animate={animation}
          className="contact__col-1"
        >
          <h4 className="sub-heading">Get in Touch</h4>
          <h1 className="heading">Contact.</h1>
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
                Email
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
                className="btn form__btn btn--primary btn--animated"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
        <motion.div 
        variants={slideIn("left", "tween", 0.3, 0.5)}
        initial="hidden"
        animate={animation}
        className="contact__col-2">
          <ShieldSphereCanvas/>
        </motion.div>
      </section>
  );
};

export default Contact;
