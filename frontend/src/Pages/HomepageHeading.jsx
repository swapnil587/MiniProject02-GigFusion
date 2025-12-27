import { motion } from "framer-motion";

export default function HomepageHeading() {
  return (
    <div className="relative top-3 md:top-20 ml-3 sm:ml-6 md:ml-10 lg:ml-20 max-w-4xl">
      
      {/* Main Heading – LEFT aligned */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="text-lg md:text-4xl lg:text-5xl font-semibold lg:font-bold text-stdBlue drop-shadow-md"
      >
        Powering the Future of Work
      </motion.h2>

      {/* Subheading – CENTERED under main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="ml-3 lg:ml-1 md:mt-3 lg:mt-4 w-fit text-sm md:text-base lg:text-xl text-stdBlue font-semibold drop-shadow-sm "
      >
        with
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="ml-2 text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-[#FF9800] via-[#FF5722] to-[#FF3D00] text-transparent bg-clip-text"
        >
          Gig-Fusion
        </motion.span>
      </motion.h2>

      {/* Description – CENTERED under main heading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className=" sm:mt-4 md:mt-4 lg:mt-5  max-w-xl text-xs sm:text-sm md:text-lg lg:text-lg text-stdBlue font-medium lg:font-bold "
      >
        Connecting you with skilled{" "}
        <span className="font-bold bg-gradient-to-r from-[#FF9800] via-[#FF5722] to-[#FF3D00] text-transparent bg-clip-text">
          Gig Experts
        </span>{" "}
        near you!
      </motion.p>

    </div>
  );
}
