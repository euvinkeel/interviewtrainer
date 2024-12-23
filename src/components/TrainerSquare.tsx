import { motion } from "framer-motion"
import type { FC } from 'react'

interface TrainerSquareProps {
  id: number;
  onClick?: () => void;
}

export const TrainerSquare: FC<TrainerSquareProps> = ({ id, onClick }) => {
  return (
	
    <motion.button
      type="button"
      className="trainer-square"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <motion.p layout>{id}</motion.p>
    </motion.button>
  );
}
