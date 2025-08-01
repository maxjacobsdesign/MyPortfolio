import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span>{name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation}  {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Design Principles</p>
        <h2 className={styles.sectionHeadText}>The Core of my Designs.</h2>
      </motion.div>

      <div className="mt-12 bg-black-100 rounded-[20px] p-10 min-h-[300px]">
        <div className="mt-10 flex flex-wrap gap-7">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, 'feedback');