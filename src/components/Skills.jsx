import { technologies } from "../constants";
import { styles } from "../styles";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="pt-24 pl-10 pr-10">
      <div>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Throughout my various projects and professional endeavors, I have
          acquired proficiency in a wide range of technologies, including:
        </p>
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        <div className="mt-10 flex gap-7 w-80">
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-900 gap-5 p-5 rounded-md flex flex-wrap items-center"
          >
            <p>Frontend</p>
            <div className="flex flex-wrap gap-5">
              {technologies
                .filter((technology) => technology.category === "frontend")
                .map((technology, index) => (
                  <div key={index} className="flex">
                    <h2 className="font-bold border-[0.5px] border-dotted	gap-2 p-1 pl-2 pr-2 rounded-md border-green-700">
                      {technology.name}
                    </h2>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex gap-7 w-80">
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-900 gap-5 p-5 rounded-md flex flex-wrap items-start justify-start"
          >
            <p>Backend</p>
            <div className="flex flex-wrap gap-5">
              {technologies
                .filter((technology) => technology.category === "backend")
                .map((technology, index) => (
                  <div key={index} className="flex">
                    <h2 className="font-bold border-[0.5px] border-dotted	gap-2 p-1 pl-2 pr-2 rounded-md border-red-800">
                      {technology.name}
                    </h2>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex w-80">
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-900 gap-5 p-5 rounded-md flex flex-wrap items-start justify-start"
          >
            <p>Languages</p>
            <div className="flex flex-wrap gap-5">
              {technologies
                .filter((technology) => technology.category === "languages")
                .map((technology, index) => (
                  <div key={index} className="flex">
                    <h2 className="font-bold border-[0.5px] border-dotted	gap-2 p-1 pl-2 pr-2 rounded-md border-yellow-600">
                      {technology.name}
                    </h2>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex w-80">
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-900 gap-5 p-5 rounded-md flex flex-wrap items-start"
          >
            <p>Database</p>
            <div className="flex flex-wrap gap-5">
              {technologies
                .filter((technology) => technology.category === "db")
                .map((technology, index) => (
                  <div key={index} className="flex">
                    <h2 className="font-bold border-[0.5px] border-dotted	gap-2 p-1 pl-2 pr-2 rounded-md border-blue-900">
                      {technology.name}
                    </h2>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex gap-7 w-80">
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-900 gap-5 p-5 rounded-md flex flex-wrap items-start"
          >
            <p>Devops</p>
            <div className="flex flex-wrap gap-5">
              {technologies
                .filter((technology) => technology.category === "devops")
                .map((technology, index) => (
                  <div key={index} className="flex">
                    <h2 className="font-bold border-[0.5px] border-dotted	gap-2 p-1 pl-2 pr-2 rounded-md border-purple-700">
                      {technology.name}
                    </h2>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
