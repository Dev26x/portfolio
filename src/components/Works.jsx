import { motion } from "framer-motion";
import { style } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../Data";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div vaariants={textVariant()} className="max-w-3xl">
        <p className={style.sectionSubText}>
          My work
        </p>
        <h2 className={style.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px]
            max-w-3xl leading-[30px]'
        >
          My portfolio demonstrates a comprehensive display of my 
          skills and expertise, exemplified through practical applications 
          of my work. Each project is accompanied by concise descriptions, 
          alongside accessible links to both code repositories and live demos. 
          This compilation showcases my adeptness in resolving intricate challenges, 
          my proficiency in handling diverse technologies, and my proficiency in 
          project management.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project}
            description={project.description}
            tags={project.tags}
            image={project.image}
            source_code_link={project.source_code_link}
            live_link={project.live_link}
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "") 