'use client';

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CreativeDatabaseIcon from '@/app/components/icons/CreativeDatabaseIcon';
import AntlerIcon from '@/app/components/icons/AntlerIcon';
import TracklibIcon from '@/app/components/icons/TracklibIcon';
import UbitIcon from '@/app/components/icons/UbitIcon';
import FlatwaveIcon from '@/app/components/icons/FlatwaveIcon';
import CleverComplianceIcon from '@/app/components/icons/CleverComplianceIcon';
import BackArrowCircle from '@/app/components/icons/BackArrowCircle';

interface ExperienceItem {
  icon: JSX.Element;
  name: string;
  employer: string;
  employerLink: string;
  position: string;
  start: string;
  end: string;
  city: string;
  country: string;
  description: string;
  frontend?: string;
  backend?: string;
  database?: string;
  other?: string;
}

const ExperienceGrid: FC = () => {
  const [selectedGrid, setSelectedGrid] = useState<ExperienceItem | null>(null); // Store the full item object

  const items: ExperienceItem[] = [
    {
      icon: <CreativeDatabaseIcon />,
      name: 'creative-database',
      employer: 'Creative Database',
      employerLink: 'https://www.creativedatabase.io/',
      position: 'Full Stack JavaScript Developer (Freelance)',
      start: 'Jan 2024',
      end: 'Present',
      city: 'Stockholm',
      country: 'Sweden',
      description:
        "Creative Database is a start-up that connects Scandinavian creative industry freelancers in order to facilitate finding work quickly and efficiently through an easy to browse database and an AI assistant." +
        "\n\n" +
        "I was tasked with building new features, improving old features, fixing bugs and optimizing overall performance.",
      frontend: "Remix/React",
      backend: "Remix",
      database: "PostgreSQL",
      other: "Prisma"
    },
    {
      icon: <AntlerIcon />,
      name: 'antler',
      employer: 'Antler',
      employerLink: 'https://www.antler.co/',
      position: 'Entrepreneur in Residence',
      start: 'Aug 2023',
      end: 'Dec 2023',
      city: 'Stockholm',
      country: 'Sweden',
      description:
        "Antler is a global VC firm and startup generator that supports entrepreneurs in building and scaling companies."
        + "\n\n" +
        "As part of the Antler VC program, I joined a cohort of driven founders and entrepreneurs, where I developed business ideas, validated concepts, and refined my skills in product design and development. Collaborating with industry experts and mentors, I contributed to ideating and prototyping early-stage ventures, while gaining valuable insights into the startup ecosystem and investment process.",
      other: "Business development"
    },
    {
      icon: <TracklibIcon />,
      name: 'tracklib',
      employer: 'Tracklib',
      employerLink: 'https://www.tracklib.com/',
      position: 'Product Designer & Lead Frontend Developer',
      start: 'Aug 2020',
      end: 'Jul 2023',
      city: 'Stockholm',
      country: 'Sweden',
      description:
        "Tracklib is a music licensing platform that allows artists to legally sample original music for their own projects by providing affordable access to pre-cleared tracks." +
        "\n\n" +
        "As as early developer at Tracklib, I was initially part of building and scaling the main product."
        + "\n\n" +
        "I was later tasked with leading the product design and frontend for a new user system that let rightsholders and record labels manage their royalties and catalogues."
      ,
      frontend: "React & Next 13/14",
      backend: "Python/Django",
      database: "PostgreSQL",
    },
    {
      icon: <UbitIcon />,
      name: 'ubit',
      employer: 'Ubit',
      employerLink: 'https://www.ubit.vc/',
      position: 'Full Stack & UX/UI Developer (Consultant)',
      start: 'Nov 2019',
      end: 'Jun 2020',
      city: 'Stockholm',
      country: 'Sweden',
      description:
        "uBIT is an operational investment firm who's core business is investing capital and technical development into early-stage founders." +
        "\n\n" +
        "As a consultant at uBIT, I was tasked with being the sole technical operator on a project maintaining a live event ticketing system and migrating the frontend from JavaScript to React.",
      frontend: "React",
      backend: "Ruby/Rails",
      database: "PostgreSQL",
    },
    {
      icon: <FlatwaveIcon />,
      name: 'flatwave',
      employer: 'Flatwave',
      employerLink: 'https://www.flatwave.se/',
      position: 'Full Stack JavaScript & UX/UI Developer (Consultant)',
      start: 'May 2019',
      end: 'Oct 2019',
      city: 'Stockholm',
      country: 'Sweden',
      description:
        "Flatwave is a consultancy that brings expertise in design, development, and product management to help companies build the right digital products, services, and experiences. By putting the user at the center of every solution, Flatwave ensures the creation of sustainable growth and lasting impact for businesses." +
        "\n\n" +
        "My time at Flatwave was spent building the internal system as well as developing my skills and knowledge in product development, UX/UI and business development.",
      frontend: "React",
      backend: "Node/Express",
      database: "MongoDB",
    },
    {
      icon: <CleverComplianceIcon />,
      name: 'clever-compliance',
      employer: 'Clever Compliance (formerly CE Check)',
      employerLink: 'https://www.clevercompliance.io/',
      position: 'JavaScript & UX/UI Developer',
      start: 'Feb 2018',
      end: 'Apr 2019',
      city: 'Stockholm',
      country: 'Sweden',
      description:
        "Clever Compliance provides compliance management software, helping businesses streamline regulatory processes and ensure product safety and compliance with industry standards." +
        "\n\n" +
        "At Clever Compliance, I was the the sole operator in the user facing domain. I was responsible for the design, development, and maintenance of the frontend, as well as the user experience.",
      frontend: "Knockout.js",
      backend: "C#/.NET",
      database: "PostgreSQL",
    },
  ];

  const handleClick = (item: ExperienceItem) => {
    setSelectedGrid(item);
  };

  const handleReturn = () => {
    setSelectedGrid(null);
  };

  const gridVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const newContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <div className="relative w-full flex items-center justify-center min-h-64 sm:min-h-80 lg:min-h-96">
      <AnimatePresence mode="wait">
        {selectedGrid === null ? (
          <motion.div
            key="initial-grid"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {items.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleClick(item)}
                className="w-full flex items-center justify-center hover:scale-105 transition-all duration-300 text-foreground-secondary hover:text-foreground"
                custom={index}
                variants={itemVariants}
              >
                {item.icon}
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={`new-grid-${selectedGrid.name}`}
            variants={newContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="max-h-8 max-w-8 mr-16 self-start text-foreground-secondary hover:text-foreground transition-colors duration-300 ease-in-out">
                <button onClick={handleReturn}>
                  <BackArrowCircle />
                </button>
              </div>
              <div className="flex flex-1 flex-col md:flex-row mt-6 md:mt-0 gap-6 md:gap-16">
                <div className="flex flex-col w-full md:w-1/2">
                  <h2 className="text-lg font-bold">{selectedGrid.position}</h2>
                  <div className="mt-2 md:mt-0">
                    <a
                      href={selectedGrid.employerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light hover:underline"
                    >
                      {selectedGrid.employer}
                    </a>
                    <p className="text-sm font-extralight text-foreground-secondary">{selectedGrid.start} - {selectedGrid.end}</p>
                    <p className="text-sm font-extralight text-foreground-secondary">{selectedGrid.city}, {selectedGrid.country}</p>
                  </div>

                  <div>
                    <div className="text-sm mt-4">
                      {selectedGrid.frontend && (
                        <p>
                          <span className="text-foreground-secondary font-light mr-2">Frontend:</span>{selectedGrid.frontend}
                        </p>
                      )}
                      {selectedGrid.backend && (
                        <p>
                          <span className="text-foreground-secondary font-light mr-2">Backend:</span>{selectedGrid.backend}
                        </p>
                      )}
                      {selectedGrid.database && (
                        <p>
                          <span className="text-foreground-secondary font-light mr-2">Database:</span>{selectedGrid.database}
                        </p>
                      )}
                      {selectedGrid.other && (
                        <p>
                          <span className="text-foreground-secondary font-light mr-2">Other:</span>{selectedGrid.other}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-sm" style={{ whiteSpace: 'pre-line' }}>
                    {selectedGrid.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceGrid;
