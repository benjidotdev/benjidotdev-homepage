import { motion } from 'framer-motion';

const BackArrowCircle = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100%"
      viewBox="0 0 256 256"
      // Add framer-motion animation
      animate={{
        x: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 24.316 44.248 l 16.193 -15.342 c 0.66 -0.625 1.748 -0.157 1.748 0.752 v 7.873 c 0 0.572 0.464 1.036 1.036 1.036 h 22.149 c 0.572 0 1.036 0.464 1.036 1.036 v 10.795 c 0 0.572 -0.464 1.036 -1.036 1.036 H 43.293 c -0.572 0 -1.036 0.464 -1.036 1.036 v 7.873 c 0 0.909 -1.088 1.377 -1.748 0.752 L 24.316 45.752 C 23.885 45.343 23.885 44.657 24.316 44.248 z"
          style={{ fill: "currentColor" }}
        />
        <path
          d="M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 8 c 20.402 0 37 16.598 37 37 c 0 20.402 -16.598 37 -37 37 C 24.598 82 8 65.402 8 45 C 8 24.598 24.598 8 45 8 z"
          style={{ fill: "currentColor" }}
        />
      </g>
    </motion.svg>
  );
};

export default BackArrowCircle;
