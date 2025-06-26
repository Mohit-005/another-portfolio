
import React from 'react';
import { motion } from 'framer-motion';
import { Flag, MapPin } from 'lucide-react';

const journeyMilestones = [
  {
    year: "2016",
    title: "Started Computer Science Degree",
    description: "Began my academic journey in computer science at MIT.",
    icon: <MapPin className="text-primary" size={20} />,
  },
  {
    year: "2018",
    title: "First Research Project",
    description: "Joined a research lab focusing on distributed systems.",
    icon: <MapPin className="text-primary" size={20} />,
  },
  {
    year: "2019",
    title: "First Internship",
    description: "Worked as a full stack developer at a tech startup.",
    icon: <MapPin className="text-primary" size={20} />,
  },
  {
    year: "2020",
    title: "Graduated with Bachelor's Degree",
    description: "Completed my undergraduate studies with honors.",
    icon: <MapPin className="text-primary" size={20} />,
  },
  {
    year: "2021",
    title: "Google Internship",
    description: "Summer internship working on search algorithms.",
    icon: <MapPin className="text-primary" size={20} />,
  },
  {
    year: "2022",
    title: "Master's Degree Completed",
    description: "Finished my graduate studies in Computer Science.",
    icon: <Flag className="text-primary" size={20} />,
  },
];

const JourneyRoadmap = () => {
  return (
    <div className="relative mt-16">
      {/* Road path */}
      <div className="absolute left-[15px] md:left-1/2 transform md:translate-x-[-50%] top-0 h-full w-1 bg-primary/20" />
      
      {/* Milestones */}
      <div className="space-y-12 md:space-y-24 relative">
        {journeyMilestones.map((milestone, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row gap-6 md:gap-12 md:items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse text-right' : 'text-left'
            }`}
          >
            {/* Year marker */}
            <div className="flex-1 md:flex md:justify-center">
              <div className="backdrop-blur-xl bg-background/60 border border-border/30 rounded-lg py-3 px-5 inline-block">
                <span className="text-xl font-bold text-primary">{milestone.year}</span>
              </div>
            </div>
            
            {/* Road marker */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary z-10">
              {milestone.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1 ml-12 md:ml-0">
              <div className="backdrop-blur-xl bg-background/60 border border-border/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-foreground/70">{milestone.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JourneyRoadmap;
