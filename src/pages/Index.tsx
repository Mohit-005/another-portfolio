import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';
import { Code, Database, Globe, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import RobotIllustration from '@/components/RobotIllustration';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
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
      image: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1000',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Neural Network Playground',
      description: 'A machine learning playground to experiment with neural networks and AI models.',
      tags: ['Python', 'TensorFlow', 'React'],
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Cloud-Based Code Editor',
      description: 'Real-time collaborative code editor with syntax highlighting for multiple languages.',
      tags: ['Node.js', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?q=80&w=1000',
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Front-End Development',
      description: 'Creating responsive, interactive interfaces with React, TypeScript, and modern CSS frameworks.',
    },
    {
      icon: <Server size={24} />,
      title: 'Back-End Development',
      description: 'Building robust APIs and services using Node.js, Express, and Python with Django/Flask.',
    },
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'Designing efficient database structures with SQL and NoSQL technologies like MongoDB and PostgreSQL.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Cloud Architecture',
      description: 'Deploying and managing applications on AWS, Google Cloud, and Azure platforms.',
    },
  ];

  const avatarAnimation = {
    initial: { scale: 1, boxShadow: '0 0 0 rgba(124, 58, 237, 0.4)' },
    hover: { 
      scale: 1.05, 
      boxShadow: '0 0 30px rgba(124, 58, 237, 0.7)',
      transition: { duration: 0.3 } 
    },
    tap: { 
      scale: 0.95,
      boxShadow: '0 0 15px rgba(124, 58, 237, 0.9)',
      transition: { duration: 0.2 } 
    }
  };

  const glowAnimation = {
    initial: { opacity: 0.5, scale: 1 },
    hover: { 
      opacity: 0.8, 
      scale: 1.2,
      transition: { 
        duration: 0.5,
        yoyo: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      } 
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  Computer Science Student
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                Crafting elegant <span className="text-gradient">digital</span> experiences
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl"
              >
                I build modern, intuitive applications with focus on performance, accessibility, and user experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4"
              >
                <Link 
                  to="/projects" 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  View Projects
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 border border-border rounded-md font-medium hover:bg-accent/50 transition-all"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-2/5 flex justify-center md:justify-end"
            >
              <RobotIllustration width={260} height={280} />
            </motion.div>
          </div>
        </div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={0}
            className="text-center mb-16"
          >
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A selection of my recent work in software development and computer science research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeVariants}
                custom={index + 1}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={4}
            className="mt-12 text-center"
          >
            <Link 
              to="/projects" 
              className="text-primary font-medium hover:underline"
            >
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-accent/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={5}
            className="text-center mb-16"
          >
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Specialized knowledge and capabilities across various technologies and domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeVariants}
                custom={index + 6}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={10}
            className="neo-blur p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              Have a project in mind or looking for a developer to join your team? 
              I'm currently available for freelance work and open to discussing full-time opportunities.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
