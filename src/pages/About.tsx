
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Award, Flag, MapPin, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JourneyRoadmap from '@/components/JourneyRoadmap';
import CertificateCard from '@/components/CertificateCard';

const About = () => {
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

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      period: '2020 - 2022',
      description: 'Specialized in Artificial Intelligence and Machine Learning.',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Massachusetts Institute of Technology',
      period: '2016 - 2020',
      description: 'Minor in Mathematics. Graduated with honors.',
    },
  ];

  const experience = [
    {
      position: 'Software Engineer Intern',
      company: 'Google',
      period: 'Summer 2021',
      description: 'Worked on improving search algorithms and user experience.',
    },
    {
      position: 'Research Assistant',
      company: 'MIT Computer Science Lab',
      period: '2018 - 2020',
      description: 'Assisted in research on distributed systems and cloud computing.',
    },
    {
      position: 'Full Stack Developer Intern',
      company: 'Tech Startup',
      period: 'Summer 2019',
      description: 'Developed and maintained web applications using React and Node.js.',
    },
  ];

  const certificates = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "January 2023",
      image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=1000",
      description: "Professional level certification validating expertise in designing distributed systems on AWS.",
    },
    {
      id: 2,
      name: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "March 2022",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000",
      description: "Comprehensive course covering machine learning algorithms, neural networks, and practical applications.",
    },
    {
      id: 3,
      name: "Full Stack Web Development",
      issuer: "Udacity",
      date: "June 2021",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000",
      description: "Certification in modern web development including frontend and backend technologies.",
    }
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
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-foreground/70 max-w-3xl">
              A passionate computer science enthusiast with a strong foundation in theoretical concepts and practical application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeVariants}
              custom={1}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div>
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeVariants}
                custom={2}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                <p className="text-foreground/70 mb-4">
                  My fascination with computers started at an early age when I first learned to program on a hand-me-down computer. That initial spark of interest has grown into a passionate pursuit of knowledge in all aspects of computer science.
                </p>
                <p className="text-foreground/70">
                  Throughout my academic journey and professional experiences, I've developed a deep understanding of both theoretical foundations and practical applications of computer science. I thrive on solving complex problems and creating elegant solutions that enhance user experiences.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeVariants}
                custom={3}
              >
                <h2 className="text-2xl font-bold mb-4">Core Values</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Innovation', 'Efficiency', 'Usability', 'Accessibility', 'Clean Code', 'Continuous Learning'].map((value, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={4}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Route className="text-primary" size={28} />
              My Professional Journey
            </h2>
            <JourneyRoadmap />
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-accent/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={4}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="neo-blur p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-lg text-foreground/80 mb-2">{item.institution}</p>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={5}
          >
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="neo-blur p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{item.position}</h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-lg text-foreground/80 mb-2">{item.company}</p>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={6}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" size={28} />
              Certificates & Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
