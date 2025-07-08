
import Link from "next/link";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="w-full min-h-screen px-8 py-16 bg-black text-center text-white font-semibold flex items-center justify-center">
      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, damping: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100, damping: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My Experience
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl mb-6 text-gray-100 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, type: "spring", stiffness: 100, damping: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I have been working for the past 3 years with JavaScript. I specialize in writing and refactoring code, as well as connecting RESTful APIs using React and Next.js.
        </motion.p>
        <motion.p
          className="text-xl sm:text-2xl mb-8 text-gray-100 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100, damping: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My experience spans across multiple tech stacks, and I enjoy guiding developers to follow best practices for scalable and maintainable code.
        </motion.p>

        <div className="flex justify-center space-x-8 mt-8">
          <motion.div
            whileHover={{
              scale: 1.1,
              borderColor: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border-2 border-transparent rounded-full px-4 py-2"
          >
            <Link
              href="/about"
              className="text-lg sm:text-xl font-semibold text-blue-500 hover:text-white transition-all duration-300"
            >
              Know More 💭
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              borderColor: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border-2 border-transparent rounded-full px-4 py-2"
          >
            <Link
              href="/contact"
              className="text-lg sm:text-xl font-semibold text-blue-500 hover:text-white transition-all duration-300"
            >
              Contact ☎️
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
