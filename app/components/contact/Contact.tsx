'use client'

import Container from '@/app/components/container/Container'
import Heading from '@/app/components/heading/Heading'
import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import clsx from 'clsx'

const thingsILike = [
  "Talk about a project?",
  "Go see some live music?",
  "Grab a coffee?",
  "Eat Pizza?"
]

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('benji@benji.dev');
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section id="contact" className="flex justify-center px-8 py-16 shadow-xl">
      <Container>
        <Heading text="Contact" />
        <div className="flex flex-col flex-1">
          <div className="flex flex-col md:flex-row gap-16 py-16">
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-end justify-center">
              <p>Contact me if you want to...</p>
              <ul className="mt-4 list-disc text-foreground-secondary">
                {thingsILike.map((thing) => (
                  <li key={thing} className="hover:text-foreground transition-colors duration-300 ease-in-out cursor-default">{thing}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-2/3 flex items-center justify-center relative">
              <button
                onClick={handleCopyEmail}
                className={clsx(
                  'flex h-full items-center justify-center text-foreground-secondary hover:text-foreground transition-colors duration-300 ease-in-out',
                  copied && 'text-foreground'
                )}
              >
                benji@benji.dev
              </button>

              <AnimatePresence>
                {copied && (
                  <motion.div
                    className="absolute top-8 md:top-24 text-foreground-secondary text-xs px-2 py-1"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
                    exit={{ opacity: 0, y: 20, transition: { duration: 2 } }}
                  >
                    Copied
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-center md:mt-16">
            <p className="text-foreground-secondary text-xs">
              &copy; {new Date().getFullYear()} benji.dev
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact