import { motion } from "framer-motion";
import { style } from "../style";
import { services } from "../Data/index";
import { fadeIn, textVariant } from '../utils/motion';
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "../hoc";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>
          Introduction
        </p>
        <h2 className={style.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px]
          max-w-3xl leading-[30px]'
      >
        Enthusiastic junior web developer with a keen eye 
        for design and a love for crafting seamless digital 
        experiences. Adept at HTML, CSS, JavaScript & React js. 
        I thrive on challenges that push my creative boundaries. 
        Eager to join a dynamic team where I can contribute my 
        skills and learn from experienced professionals, ultimately 
        shaping a brighter and more engaging online world.
      </motion.p>

      <div
        className="flex flex-wrap mt-20 gap-10 justify-center"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.id} index={index} title={service.title} 
            icon={service.icom} {...service}
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");