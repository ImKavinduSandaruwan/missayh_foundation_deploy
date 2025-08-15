import { motion } from 'framer-motion';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const projects = [
  {
    title: 'Stationery for Success',
    description: 'We provided stationery and study materials to 100 students, supporting...',
    date: '11 Dec 2022',
    image: project1,
  },
  {
    title: 'Sponsored Lunch',
    description: 'We celebrated Children’s day by serving a special lunch to 40 happy students.',
    date: '11 Dec 2022',
    image: project2,
  },
  {
    title: 'School books & shoes',
    description: 'We provided school books & comfortable shoes to students & helping their education.',
    date: '11 Dec 2022',
    image: project3,
  },
];

const ProjectsSection = () => {
  return (
    <div className=" md:px-8 lg:px-16">
      {/* Desktop grid view */}
      <div className="hidden md:grid  md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Mobile horizontal scroll */}
      <motion.div
        className="md:hidden flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory "
        whileTap={{ cursor: 'grabbing' }}
      >
        {projects.map((project, index) => (
          <div className=" min-w-[90%] snap-center" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ title, description, date, image }) => (
  <div
    className="flex flex-col items-end justify-end h-150 rounded-3xl shadow-[0_2px_9.2px_0_rgba(0,0,0,0.05)] bg-center bg-cover"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="flex flex-col gap-4 bg-white p-8 rounded-b-3xl">
      <p className="text-lg font-extrabold text-black">{title}</p>
      <p className="text-sm font-medium text-black">{description}</p>
      <p className="text-sm font-medium text-black">{date}</p>
    </div>
  </div>
);

export default ProjectsSection;