'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const About = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setUploadStatus(null);

    try {
      const formData = new FormData();
      formData.append('resume', file);

      const response = await fetch('/api/upload-resume', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setUploadStatus({ success: true, message: result.message });

      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setFile(null);
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadStatus({
        success: false,
        message: error.message || 'Error uploading resume'
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800'>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* 🚀 Header Section */}
        <header className="text-center mb-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            About Me ✨
          </motion.h1>
        </header>

        {/* 👨‍💻 Intro Section */}
        <section className="intro mb-12">
          <motion.p
            className="text-lg text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi, I'm <strong className="text-indigo-600">Nazmul Hasan</strong>, a passionate software engineer 🧑‍💻 with a knack for building scalable and efficient applications. I specialize in full-stack development, combining creativity 🎨 with technical expertise to deliver solutions that are both user-friendly and performance-driven 🚀.
          </motion.p>

          <motion.p
            className="text-lg text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I started my career in software engineering because of my fascination with how technology can solve real-world problems 🌍. With a background in
            <strong className="text-indigo-600"> Computer Science & Engineering</strong> from
            <strong className="text-blue-600"> Bangladesh University of Business and Technology (BUBT)</strong>,
            where I graduated with a <strong className="text-green-600"> CGPA of 3.47 🎓</strong>,
            I've had the privilege of working on a variety of projects, ranging from small start-ups to large enterprise solutions. Every challenge I've faced has shaped me into the developer I am today—curious, adaptable, and always eager to learn 📚.
          </motion.p>

          <motion.p
            className="text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            When I'm not coding, you'll likely find me experimenting with new technologies, contributing to open-source projects, or reading up on the latest trends in the tech world 🌐.
          </motion.p>
        </section>

        {/* 💼 Professional Background */}
        <section className="professional-background mb-12">
          <motion.h2
            className="text-3xl font-semibold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Professional Background 💼
          </motion.h2>
          <motion.ul
            className="list-disc pl-6 space-y-2 text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <li>
              👨‍💻 <strong className="text-blue-600">Front-End Developer at RSTheme</strong> -
              Built high-performance websites and web applications using React.js.
              RSTheme specializes in developing premium themes for the ThemeForest marketplace,
              focusing on creating responsive, scalable, and user-friendly designs.
              Collaborated with cross-functional teams to deliver high-quality products and
              contributed to the continuous improvement of theme features and performance.
            </li>
            <li>
              🛠️ <strong className="text-blue-600">Content Moderator at Quantanite</strong> -
              Ensured quality, accuracy, and compliance in digital content across various platforms.
              As part of a BPO team, I worked on content moderation, customer support, and
              process optimization for clients in diverse industries.
              Ensured that content adhered to guidelines, maintained brand integrity,
              and upheld community standards.
            </li>
            <li>📈 Built a full-stack e-commerce platform for a local business that increased their sales by 30%.</li>
            <li>🚀 Led a team of developers to build a high-traffic web application for a tech company.</li>
            <li>🌍 Contributed to several open-source projects aimed at improving developer productivity.</li>
          </motion.ul>
        </section>

        {/* 🔧 Tech Stack */}
        <section className="tech-stack mb-12">
          <motion.h2
            className="text-3xl font-semibold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            My Tech Stack 🛠️
          </motion.h2>
          <motion.ul
            className="list-disc pl-6 space-y-2 text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <li>🌐 <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React, Next, Tailwind CSS, SASS</li>
            <li>⚙️ <strong>Backend:</strong> Node.js, Express.js</li>
            <li>💾 <strong>Databases:</strong> MySQL, MongoDB, Firebase</li>
            <li>🔗 <strong>Version Control:</strong> Git, GitHub, GitLab</li>
            <li>☁️ <strong>Cloud/DevOps:</strong> AWS, Docker</li>
            <li>🧪 <strong>Testing:</strong> Jest, Mocha, Cypress, Selenium</li>
          </motion.ul>
        </section>

        {/* 🎯 Soft Skills */}
        <section className="soft-skills mb-12">
          <motion.h2
            className="text-3xl font-semibold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Soft Skills 🤝
          </motion.h2>
          <motion.ul
            className="list-disc pl-6 space-y-2 text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <li>🗣️ <strong>Communication:</strong> Comfortable presenting ideas and collaborating with teams.</li>
            <li>🧩 <strong>Problem-Solving:</strong> Breaks down complex problems into solutions.</li>
            <li>🤝 <strong>Teamwork:</strong> Enjoys working in diverse teams.</li>
            <li>🚀 <strong>Leadership:</strong> Experienced in leading projects and mentoring juniors.</li>
          </motion.ul>
        </section>

        {/* 🎮 Hobbies & Interests */}
        <section className="hobbies-interests mb-12">
          <motion.h2
            className="text-3xl font-semibold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Hobbies & Interests 🎮
          </motion.h2>
          <motion.ul
            className="list-disc pl-6 space-y-2 text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <li>♟️ Playing chess and solving puzzles.</li>
            <li>🌍 Exploring the outdoors and traveling.</li>
            <li>📖 Reading books on technology and self-growth.</li>
          </motion.ul>
        </section>

        {/* Resume Section */}
        <section className="resume mb-12">
          <motion.h2
            className="text-3xl font-semibold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            My Resume 📜
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="space-y-4"
          >
            {/* Download Button */}
            <div>
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:scale-105 hover:bg-indigo-700 transition-transform duration-300 mr-4"
              >
                📥 Download Current Resume
              </a>
            </div>

            {/* Upload Section */}
            <div className="mt-6 p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Update Resume</h3>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 cursor-pointer
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
                />

                <button
                  onClick={handleUpload}
                  disabled={!file || uploading}
                  className={`px-4 py-2 rounded-md text-white ${uploading || !file ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'} transition-colors min-w-[120px]`}
                >
                  {uploading ? 'Uploading...' : 'Upload New'}
                </button>
              </div>

              {file && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </p>
              )}

              {uploadStatus && (
                <p className={`mt-2 text-sm ${uploadStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                  {uploadStatus.message}
                </p>
              )}

              <p className="mt-3 text-sm text-gray-500">
                Note: Uploading a new resume will replace the existing one.
                Only PDF files are accepted.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 📬 Contact */}
        <footer className="text-center mt-12">
          <motion.p
            className="text-lg text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 7.5 }}
          >
            📩 Let's connect! Reach out via{' '}
            <Link href="https://www.linkedin.com/in/nazmul-hasan-sunny" target="_blank" className="text-indigo-600 hover:underline">
              LinkedIn 🔗
            </Link>
          </motion.p>
        </footer>
      </div>
    </div>
  );
}


export default About;