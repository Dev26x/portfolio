import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';
import { github } from "../assets";

const ProjectCard = ({ index, description, tags, name, image, source_code_link, live_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt="name"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div
            className="absolute inset-0 flex justify-end m-3 gap-1 card-img_hover"
          >
            {/* github url link */}
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="red-gradient w-10 h-10 rounded-full flex
               justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt='github'
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {/* live project url */}
            <div 
              onClick={() => window.open(live_link, '_blank')}
              className="red-gradient w-10 h-10 rounded-full flex
               justify-center items-center cursor-pointer"
            >
              <img 
                src={image}
                alt='project url'
                className="w-1/2 h-1/2 object-contain"
              />

            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 
            className="text-[#fe0944] font-bold text-[24px]"
          >
            {name}
            </h3>
          <p
            className="text-secondary text-[14px] mt-2"
          >
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p 
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

export default ProjectCard