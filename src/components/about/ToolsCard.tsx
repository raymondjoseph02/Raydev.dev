"use client";
import { ToolCardProps } from "@/types/types";
import { motion } from "framer-motion";

function ToolsCard({ title, icon, index = 0 }: ToolCardProps & { index?: number }) {
  return (
    <motion.div
      className="flex gap-5 py-3 px-4 items-center border border-primary-200 bg-gray-250 rounded-xl hover:shadow-lg hover:shadow-primary-200/20 transition-shadow duration-300 group"
      tabIndex={0}
      role="group"
      aria-label={title}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.6 + index * 0.05,
        type: "spring",
        stiffness: 120,
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="bg-primary-100 p-3 rounded-xl"
        whileHover={{
          rotate: [0, -10, 10, -10, 0],
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
      >
        {icon}
      </motion.div>
      <span className="font-medium text-sm">
        <p className="font-un-bounded text-white">
          {title}
        </p>
      </span>
    </motion.div>
  );
}

export default ToolsCard;
