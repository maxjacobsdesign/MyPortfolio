import React from 'react';
import Tilt from 'react-parallax-tilt'; 
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper} from '../hoc'; 

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/* Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Paragraph */}
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       I'm a UI designer passionate about crafting clean, intuitive, and responsive interfaces. 
       With a background in media production and a focus on sports media advertising from the University of Colorado Boulder, 
       I bring both creative strategy and visual clarity to every project.
       I specialize in user-centered design, using tools like Figma, Tailwind CSS, and Framer Motion to turn ideas into high-impact digital experiences.
       My global perspective—shaped by four years in Switzerland and Hungary—enhances my adaptability, empathy, and multilingual communication, 
       including fluency in French. I thrive in collaborative environments where thoughtful design solves real problems.
      </motion.p>

      {/* Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper (About, 'about')