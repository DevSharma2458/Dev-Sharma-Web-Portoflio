import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
 <Tilt
  tiltMaxAngleX={45}
  tiltMaxAngleY={45}
  scale={1}
  transitionSpeed={450}
  className='xs:w-[250px] w-full'
>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img
        src={icon}
        alt='web-development'
        className='w-16 h-16 object-contain'
      />
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
</Tilt>

);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'
      >Hey! I am Dev Sharma, a B.Tech graduate in Computer Science and Engineering from Parul University with a strong foundation in backend and full stack development. Skilled in Python (Django/REST) and React.js, I focus on building secure, scalable, and efficient applications that solve real-world problems. I have completed an internship at BISAG-N, where I contributed to impactful projects, gaining hands-on experience in software development and security practices. Over time, I have also worked on academic and personal projects ranging from e-commerce platforms to security-driven applications, which helped me strengthen my problem-solving, debugging, and testing skills. With a passion for continuous learning and collaboration, I aim to create reliable, user-friendly solutions that combine functionality with long-term value.</motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
