import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div  className="sm:px-16 px-6 absolute inset-0 top-[150px] max-w-7xl mx-14 flex flex-row items-start gap-5 ">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <motion.div
            variants={textVariant()}
            
          >
            <h1 className="font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[78px] mt-2 transition: transform 50ms">
              Hi, I am{" "}
              <span className="text-[#915eff] hover:text-white">Raghav</span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[16px] xs:text-[10px] text-[10px] lg:leading-[30px] w-[50%]"
          >
            Software Engineer with passion for Technology, Cloud and Automation. <br />
            I am obsessed with attention to detail and always learning something exciting on the side. <br />
            
          </motion.p>
        </div>

        <div className="absolute xs:bottom-10 bottom-28 w-full flex justify-center items-center">
          <Link activeClass="active" spy to="skills" className="cursor-pointer">
            <div className="w-[25px] h-[54px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2 h-2 rounded-full bg-secondary mb-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
