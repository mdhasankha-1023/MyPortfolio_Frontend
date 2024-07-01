/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Button({ children }) {
  return (
    <>
      <motion.button
        initial={false}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255, 255, 255)",
          boxShadow: "0px 0px 8px rgb(255, 255, 255)"
        }}
        type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{children}</motion.button>
    </>

  )
}
