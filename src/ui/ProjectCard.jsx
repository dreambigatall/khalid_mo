import { FiGithub } from 'react-icons/fi';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { projects } from '../projectData';
import { Link } from 'react-router-dom';
import Chips from './Chips';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export default function ProjectCard() {
  return (
    <motion.div
      className=' grid grid-cols-1 gap-6 sm:grid-cols-2 xs:gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12 '
      variants={cardVariant}
      initial='hidden'
      animate='show'
    >
      {projects.map((project) => {
        const { name, image, description, projectLink, githubLink, skills } =
          project;
        return (
          <motion.div
            key={project.name}
            className=' font-vietnam backdrop-blur-custom p-6 shadow-card outline outline-[2px] outline-background hover:outline hover:outline-[1px] cursor-pointer 2xl:p-8'
            variants={card}
<<<<<<< HEAD
            whileHover={{
              outline: '1px solid var(--accent)',
              y: -10,
            }}
=======
>>>>>>> 39a3efb6f015ff62246e952d1d394056cfdf804e
          >
            <div className=' pb-6 2xl:pb-8'>
              <img src={image} alt={name} />
            </div>
            <div className=' flex flex-col gap-4 2xl:gap-6'>
              <div className=' flex flex-col gap-2 2xl:gap-4'>
                <div className=' flex justify-between items-center gap-4'>
                  <h3 className=' font-sans text-accent text-lg font-bold uppercase md:text-xl 2xl:text-2xl'>
                    {name}
                  </h3>
                  <div className=' flex gap-2 text-text-secondary text-xl md:text-2xl 2xl:gap-4 2xl:text-3xl'>
                    <motion.span
                      whileHover={{
                        y: -3,
                      }}
                    >
                      <Link to={projectLink} target='_blank'>
                        <MdOutlineOpenInNew />
                      </Link>
                    </motion.span>
                    <motion.span
                      whileHover={{
                        y: -3,
                      }}
                    >
                      <Link
                        to={githubLink}
                        target='_blank'
                        whileHover={{
                          y: -3,
                        }}
                      >
                        <FiGithub />
                      </Link>
                    </motion.span>
                  </div>
                </div>
                <p className=' text-text text-sm md:text-base 2xl:text-lg'>
                  {description}
                </p>
              </div>
              <Chips
                skills={skills}
                title={'tech stack'}
                cardVariant={cardVariant}
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
