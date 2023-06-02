import { technologies } from "../constants";
import { styles } from "../styles";

const Skills = () => {
  return (
    <div id="skills" className="p-10">
      <div>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Throughout my various projects and professional endeavors, I have
          acquired proficiency in a wide range of technologies, including:
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {technologies.map((technology) => (
          <div className="flex flex-col justify-center items-center">
            <div className="h-26 w-26 p-8 m-2 bg-indigo-600 bg-opacity-25 rounded-full">
              <img src={technology.icon} className="h-10 w-10" />
            </div>
            <h2 className="font-bold">{technology.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
