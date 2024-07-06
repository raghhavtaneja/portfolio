import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-scroll";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[150px] max-w-7xl mx-14 flex flex-row items-start gap-5 ">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <motion.div variants={textVariant()}>
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
            className="text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[16px] xs:text-[14px] text-[14px] lg:leading-[30px] w-[50%]"
          >
            Full Stack Software Engineer - passionate about Tech, AI and
            Building. <br />
            <AnimatedText
              el="h2"
              text={[
                "I am obsessed with",
                "attention to detail and",
                "always learning something exciting on the side.",
              ]}
              className="lg:text-[20px] sm:text-[12px] xs:text-[12px] text-[12px]"
              repeatDelay={10000}
            />
          </motion.p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-20 left-1/2 right-1/2 transform -translate-x-1/2 w-full flex justify-center items-center">
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
    </section>
  );
};

export default Hero;
