
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const projects = [
    {
      title: 'Smart Algorithm Visualizer',
      description: 'Interactive visualization of complex algorithms with step-by-step explanation.',
      tags: ['React', 'TypeScript', 'D3.js'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1000',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Neural Network Playground',
      description: 'A machine learning playground to experiment with neural networks and AI models.',
      tags: ['Python', 'TensorFlow', 'React'],
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Cloud-Based Code Editor',
      description: 'Real-time collaborative code editor with syntax highlighting for multiple languages.',
      tags: ['Node.js', 'Socket.io', 'MongoDB'],
      category: 'web',
      image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1000',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Personal Finance Tracker',
      description: 'Mobile application to track personal expenses and provide insights on spending habits.',
      tags: ['React Native', 'Firebase', 'Chart.js'],
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Blockchain Explorer',
      description: 'A tool to visualize and explore blockchain transactions and smart contracts.',
      tags: ['Web3.js', 'React', 'Node.js'],
      category: 'blockchain',
      image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Augmented Reality Navigation',
      description: 'AR application that overlays navigation information on the real world.',
      tags: ['Unity', 'ARKit', 'C#'],
      category: 'ar',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1000',
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'ar', name: 'AR/VR' },
  ];

  return (
    <Layout>
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={0}
            className="text-center mb-16"
          >
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
              My Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A collection of my work in software development, machine learning, and computer science research.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={1}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent/50 text-foreground/70 hover:bg-accent'
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeVariants}
                custom={index + 2}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
