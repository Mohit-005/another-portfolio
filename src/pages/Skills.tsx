
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SkillCard from '@/components/SkillCard';
import { useTheme } from '@/components/ThemeProvider';
import { Code, Database, Globe, Server, Terminal, Cpu, Cloud, Lock, BarChart, Layers, Monitor, Brain } from 'lucide-react';

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

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

  const skillCategories = [
    {
      title: 'Development',
      skills: [
        { 
          icon: <Code size={24} />, 
          title: 'Front-End Development', 
          description: 'Creating responsive, interactive interfaces with React, TypeScript, and modern CSS frameworks.',
          detailedSkills: [
            'React & React Native',
            'TypeScript / JavaScript ES6+',
            'HTML5 & CSS3, Tailwind CSS, Styled Components',
            'Redux / Context API',
            'Next.js & Gatsby',
            'Responsive Design & Animation (Framer Motion)',
            'Web Accessibility Standards'
          ]
        },
        { 
          icon: <Server size={24} />, 
          title: 'Back-End Development', 
          description: 'Building robust APIs and services using Node.js, Express, and Python with Django/Flask.',
          detailedSkills: [
            'Node.js & Express',
            'Python (Django, Flask)',
            'RESTful API Design',
            'GraphQL',
            'Authentication & Authorization',
            'Microservices Architecture',
            'API Security & Rate Limiting'
          ]
        },
        { 
          icon: <Monitor size={24} />, 
          title: 'UI/UX Design', 
          description: 'Crafting intuitive user experiences with Figma, Adobe XD, and following design principles.',
          detailedSkills: [
            'Figma & Adobe XD',
            'User Research & Personas',
            'Wireframing & Prototyping',
            'Usability Testing',
            'Design Systems',
            'Accessible Design',
            'Interaction Design'
          ]
        },
        { 
          icon: <Layers size={24} />, 
          title: 'Full-Stack Development', 
          description: 'End-to-end development with modern tech stacks and best practices.',
          detailedSkills: [
            'MERN Stack (MongoDB, Express, React, Node)',
            'JAMstack Architecture',
            'TypeScript Full-Stack Applications',
            'PWA Development',
            'Testing (Jest, React Testing Library)',
            'Web Performance Optimization',
            'SEO Best Practices'
          ]
        }
      ]
    },
    {
      title: 'Data & Infrastructure',
      skills: [
        { 
          icon: <Database size={24} />, 
          title: 'Database Design', 
          description: 'Designing efficient database structures with SQL and NoSQL technologies like MongoDB and PostgreSQL.',
          detailedSkills: [
            'PostgreSQL & MySQL',
            'MongoDB & Firebase',
            'Redis & Caching Strategies',
            'Database Normalization',
            'Query Optimization',
            'Data Modeling',
            'ORM Tools (Prisma, Sequelize)'
          ]
        },
        { 
          icon: <Cloud size={24} />, 
          title: 'Cloud Architecture', 
          description: 'Deploying and managing applications on AWS, Google Cloud, and Azure platforms.',
          detailedSkills: [
            'AWS (EC2, S3, Lambda, RDS)',
            'Google Cloud Platform',
            'Microsoft Azure',
            'Serverless Architecture',
            'Cloud Cost Optimization',
            'Multi-cloud Strategies',
            'IaaS, PaaS, SaaS Models'
          ]
        },
        { 
          icon: <Terminal size={24} />, 
          title: 'DevOps', 
          description: 'Implementing CI/CD pipelines and infrastructure as code using Docker, Kubernetes, and Terraform.',
          detailedSkills: [
            'Docker & Containerization',
            'Kubernetes Orchestration',
            'CI/CD Pipelines (GitHub Actions, Jenkins)',
            'Infrastructure as Code (Terraform)',
            'Monitoring & Logging (ELK Stack)',
            'Shell Scripting',
            'Automated Testing & Deployment'
          ]
        },
        { 
          icon: <Lock size={24} />, 
          title: 'Security', 
          description: 'Implementing secure coding practices and conducting security audits.',
          detailedSkills: [
            'OWASP Top 10 Security Risks',
            'Authentication Systems',
            'OAuth & JWT Implementation',
            'Encryption & Hashing',
            'Security Headers',
            'Penetration Testing',
            'Compliance (GDPR, HIPAA)'
          ]
        }
      ]
    },
    {
      title: 'Advanced Topics',
      skills: [
        { 
          icon: <Brain size={24} />, 
          title: 'Machine Learning', 
          description: 'Developing predictive models and algorithms using TensorFlow, PyTorch, and scikit-learn.',
          detailedSkills: [
            'TensorFlow & Keras',
            'PyTorch',
            'Scikit-learn',
            'Natural Language Processing',
            'Computer Vision',
            'Recommendation Systems',
            'Time Series Analysis'
          ]
        },
        { 
          icon: <Cpu size={24} />, 
          title: 'Systems Programming', 
          description: 'Low-level programming in C, C++, and Rust for performance-critical applications.',
          detailedSkills: [
            'C & C++',
            'Rust',
            'Memory Management',
            'Multithreading & Concurrency',
            'Operating System Concepts',
            'Embedded Systems',
            'Performance Optimization'
          ]
        },
        { 
          icon: <BarChart size={24} />, 
          title: 'Data Analysis', 
          description: 'Extracting insights from large datasets using Python, R, and visualization tools.',
          detailedSkills: [
            'Python (Pandas, NumPy)',
            'R Statistical Language',
            'Data Visualization (D3.js, Matplotlib)',
            'ETL Processes',
            'Exploratory Data Analysis',
            'Statistical Analysis',
            'Big Data Tools (Spark, Hadoop)'
          ]
        },
        { 
          icon: <Globe size={24} />, 
          title: 'Distributed Systems', 
          description: 'Designing reliable, scalable distributed systems and algorithms.',
          detailedSkills: [
            'Distributed Algorithms',
            'Message Queues (RabbitMQ, Kafka)',
            'Load Balancing',
            'Service Discovery',
            'CAP Theorem Implementation',
            'Fault Tolerance & Resilience',
            'Distributed Databases'
          ]
        }
      ]
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
            className="text-center mb-16"
          >
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
              Expertise
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise in computer science.
            </p>
          </motion.div>

          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="mb-20">
              <motion.h2
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeVariants}
                custom={categoryIndex + 1}
                className="text-2xl md:text-3xl font-bold mb-8"
              >
                {category.title}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.title}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    variants={fadeVariants}
                    custom={categoryIndex + skillIndex + 2}
                  >
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeVariants}
            custom={15}
            className="mt-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Technical Proficiency</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                { name: 'JavaScript/TypeScript', level: 95 },
                { name: 'React & React Native', level: 90 },
                { name: 'Python', level: 85 },
                { name: 'Node.js', level: 80 },
                { name: 'SQL & NoSQL Databases', level: 85 },
                { name: 'C/C++', level: 70 },
                { name: 'Cloud Services (AWS, GCP)', level: 75 },
                { name: 'Machine Learning', level: 65 }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={fadeVariants}
                  custom={index + 16}
                  className="mb-4"
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-foreground/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-accent/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: (index + 16) * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${theme === 'gaming' ? 'bg-accent' : 'bg-primary'}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
