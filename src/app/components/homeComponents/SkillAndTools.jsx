import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillCard from './componentCard/SkillCard';
import AddSkillModal from './componentCard/AddSkillModal';

const CATEGORY_LABELS = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  database: 'Databases',
  authentication: 'Authentication',
  devops: 'DevOps & Cloud',
  testing: 'Testing',
  'ui-ux': 'UI/UX Design',
  mobile: 'Mobile Development',
  other: 'Other Skills'
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function SkillAndTools() {
  const [skills, setSkills] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Fetch skills on component mount
  useEffect(() => {
    const fetchSkills = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/skills');
        if (!res.ok) {
          throw new Error('Failed to fetch skills');
        }
        const data = await res.json();
        setSkills(data);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Group skills by category
  const skillsByCategory = React.useMemo(() => {
    return skills.reduce((acc, skill) => {
      const category = skill.category || 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {});
  }, [skills]);

  // Get unique categories from skills
  const categories = React.useMemo(() => {
    const uniqueCategories = [...new Set(skills.map(skill => skill.category || 'other'))];
    return ['all', ...uniqueCategories].sort();
  }, [skills]);

  const handleAddSkill = async (newSkill) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', newSkill.name);
      formData.append('link', newSkill.link);
      formData.append('category', newSkill.category || 'other');

      if (newSkill.logoFile) {
        formData.append('logo', newSkill.logoFile);
      }

      const response = await fetch('/api/skills', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const addedSkill = await response.json();
        setSkills(prev => [...prev, addedSkill]);
        setIsModalOpen(false);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add skill');
      }
    } catch (error) {
      console.error('Error adding skill:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return (
      <motion.div 
        className="container mx-auto px-4 py-12 text-center text-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Error: {error}
      </motion.div>
    );
  }

  if (isLoading && skills.length === 0) {
    return (
      <motion.div 
        className="container mx-auto px-4 py-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"
        />
        Loading skills...
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-12"
    >
      {/* Header Section */}
      <motion.header 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          My Technical Skills
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Technologies and tools I'm proficient with, organized by category.
        </motion.p>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          disabled={isLoading}
          className="mt-6 px-6 py-3 bg-red-800 hover:bg-red-750 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          {isLoading ? 'Processing...' : 'Add New Skill +'}
        </motion.button>
      </motion.header>

      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        variants={containerVariants}
      >
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full transition-all duration-200 ${
              activeCategory === category
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === 'all' ? 'All Skills' : CATEGORY_LABELS[category] || category}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Display */}
      <motion.div 
        className="space-y-16"
        variants={containerVariants}
      >
        {Object.entries(skillsByCategory)
          .filter(([category]) => 
            activeCategory === 'all' || category === activeCategory
          )
          .map(([category, categorySkills]) => (
            <motion.section 
              key={category} 
              className="animate-fadeIn"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {CATEGORY_LABELS[category] || category}
              </motion.h2>
              
              {categorySkills.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
                  variants={containerVariants}
                >
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill._id || skill.name}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No skills in this category
                </motion.p>
              )}
            </motion.section>
          ))}
      </motion.div>

      {/* Add Skill Modal */}
      <AddSkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddSkill}
        categories={Object.keys(CATEGORY_LABELS)}
        isLoading={isLoading}
      />
    </motion.div>
  );
}