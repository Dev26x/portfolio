import { motion } from "framer-motion";
import { style } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${style.paddingX} absolute inset-0 top-[120px] 
        max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#dc2626]"/>
          <div className="w-1 sm:h-80 red-gradient"/>
        </div>

        <div>
          <h1 className={`${style.heroHeadText} text-white`}>
            Hi, I am Dev<span className="text-[#dc2626]">26</span>x
          </h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            I make amazing web applications and <br className="sm:hidden block"/> user interfaces.
          </p>
        </div>

      </div>

      <ComputersCanvas />

      <div
        className="absolute xs:bottom-[-10px] bottom-0  w-full flex justify-center items-end"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#dc2626]
            flex justify-center items-start p-2"
          >
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-[#dc2626] mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}
export default Hero