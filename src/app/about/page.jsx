'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header Section */}
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About Me
        </motion.h1>
      </header>

      {/* Intro Section */}
      <section className="intro mb-12">
        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hi, I'm <strong className="text-indigo-600">Nazmul Hasan</strong>, a passionate software engineer with a knack for building scalable and efficient applications. I specialize in full-stack development, combining creativity with technical expertise to deliver solutions that are both user-friendly and performance-driven.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          I started my career in software engineering because of my fascination with how technology can solve real-world problems. With a background in <strong className="text-indigo-600">Computer Science & Engineering</strong>, I’ve had the privilege of working on a variety of projects, ranging from small start-ups to large enterprise solutions. Every challenge I’ve faced has shaped me into the developer I am today—curious, adaptable, and always eager to learn.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          When I'm not coding, you’ll likely find me experimenting with new technologies, contributing to open-source projects, or reading up on the latest trends in the tech world.
        </motion.p>
      </section>

      {/* Professional Background Section */}
      <section className="professional-background mb-12">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Professional Background
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Over the years, I've worked with both startups and established enterprises, helping them tackle complex problems and build scalable solutions. Some key milestones include:
        </motion.p>
        <motion.ul
          className="list-disc pl-6 space-y-2 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <li>Building a full-stack e-commerce platform for a local business that increased their sales by 30%.</li>
          <li>Leading a team of developers to build a high-traffic web application for a tech company.</li>
          <li>Contributing to several open-source projects aimed at improving developer productivity.</li>
        </motion.ul>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack mb-12">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          My Tech Stack
        </motion.h2>
        <motion.ul
          className="list-disc pl-6 space-y-2 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
        >
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React, Vue.js, TypeScript, SASS</li>
          <li><strong>Backend:</strong> Node.js, Express, Python (Flask/Django), Ruby on Rails</li>
          <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Firebase</li>
          <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
          <li><strong>Cloud/DevOps:</strong> AWS, Docker, Jenkins, Kubernetes</li>
          <li><strong>Testing:</strong> Jest, Mocha, Cypress, Selenium</li>
          <li><strong>Other Tools:</strong> GraphQL, RESTful APIs, Webpack, Nginx</li>
        </motion.ul>
      </section>

      {/* Soft Skills Section */}
      <section className="soft-skills mb-12">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5 }}
        >
          Soft Skills
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5.5 }}
        >
          In addition to my technical skills, I strongly believe in the power of effective communication, teamwork, and problem-solving. These skills have helped me work efficiently in collaborative environments and adapt to changing requirements.
        </motion.p>
        <motion.ul
          className="list-disc pl-6 space-y-2 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 6 }}
        >
          <li><strong>Communication:</strong> Comfortable presenting ideas, collaborating with teams, and sharing knowledge.</li>
          <li><strong>Problem-Solving:</strong> Able to break down complex problems and find creative solutions.</li>
          <li><strong>Teamwork:</strong> Enjoy working with diverse teams and learning from others.</li>
          <li><strong>Leadership:</strong> Experience leading projects and mentoring junior developers.</li>
        </motion.ul>
      </section>

      {/* Hobbies/Interests Section */}
      <section className="hobbies-interests mb-12">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 6.5 }}
        >
          Hobbies & Interests
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7 }}
        >
          When I’m not immersed in code, I enjoy:
        </motion.p>
        <motion.ul
          className="list-disc pl-6 space-y-2 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7.5 }}
        >
          <li>Playing chess and solving puzzles to keep my mind sharp.</li>
          <li>Exploring the outdoors, hiking, and traveling to new places.</li>
          <li>Reading books on technology, philosophy, and personal growth.</li>
        </motion.ul>
      </section>

      {/* Resume Section */}
      <section className="resume mb-12">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 8 }}
        >
          Download My Resume
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 8.5 }}
        >
          For a more detailed look at my experience and skills, feel free to download my resume:
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 9 }}
        >
          {/* Using a normal anchor tag to force download in a new tab */}
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-indigo-700"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-12">
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 9.5 }}
        >
          Let's connect! Feel free to reach out via{' '}
          <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" className="text-indigo-600 hover:underline">
            LinkedIn
          </Link>.
        </motion.p>
      </footer>
    </div>
  );
}
