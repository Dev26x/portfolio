import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { style } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div 
      className="xl:mt-12 xl:flex-row flex flex-col-reverse
        gap-10 overflow-hidden"
    >
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl" 
      >
        <p className={style.sectionSubText}>Get in touch</p>
        <h3 className={style.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4 text-white">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name?"
              className="bg-tertiary placeholder:text-secondary py-4
               px-6 outlined-none rounded-lg text-white border-none
               font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4 text-white">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email?"
              className="bg-tertiary placeholder:text-secondary py-4
               px-6 outlined-none rounded-lg text-white border-none
               font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium mb-4 text-white">Your Message</span>
            <textarea
              rows='7'
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message?"
              className="bg-tertiary placeholder:text-secondary py-4
               px-6 outlined-none rounded-lg text-white border-none
               font-medium"
            />
          </label>

          <button type="submit">

          </button>
        </form>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')