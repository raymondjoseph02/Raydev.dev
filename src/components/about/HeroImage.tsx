import { motion } from "framer-motion";
import Image from "next/image";
import gym_image from "../../../public/png/gym-1.jpeg";

function HeroImages() {
  return (
    <motion.div
      className="flex-col sm:flex gap-10 justify-between hidden"
      layout
    >
      <motion.div
        className="max-h-104 h-full w-full max-w-xs overflow-hidden rounded-2xl rotate-6"
        animate={{ rotate: 8 }}
        transition={{ duration: 0.3, delay: 0.004, ease: "easeInOut" }}
      >
        <Image
          src={gym_image}
          alt="Raymond in the gym"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="max-h-104 h-full w-full max-w-xs overflow-hidden rounded-2xl"
        animate={{ rotate: 2 }}
        transition={{ duration: 0.3, delay: 0.004, ease: "easeInOut" }}
      >
        <Image
          src={gym_image}
          alt="Raymond in the gym"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* <motion.div
        className="max-h-104 h-full w-full max-w-xs overflow-hidden rounded-2xl -rotate-3"
        animate={{ rotate: -6 }}
        transition={{ duration: 0.3, delay: 0.004, ease: "easeInOut" }}
      >
        <Image
          src={gym_image}
          alt="Raymond in the gym"
          className="w-full h-full object-cover"
        />
      </motion.div> */}
    </motion.div>
  );
}
export default HeroImages;
