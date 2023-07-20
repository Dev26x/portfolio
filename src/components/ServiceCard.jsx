import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';


const ServiceCard = ({ title, index, icon }) => {
    return(
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className="w-full red-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            style={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary py-5 px-12 min-h-[280px] rounded-[20px]
              flex flex-col justify-evenly items-center"
          >
            <img 
              src={icon} 
              alt="icon" 
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] text-center font-bold">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }

  export default ServiceCard;