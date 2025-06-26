
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  detailedSkills?: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  icon, 
  title, 
  description, 
  className,
  detailedSkills = [] 
}) => {
  const [open, setOpen] = React.useState(false);

  // Define the tools and languages for each skill category
  const getToolsAndLanguages = () => {
    switch (title) {
      case 'Front-End Development':
        return 'JavaScript, TypeScript, HTML5, CSS3, React, Vue.js, Angular, Next.js, Gatsby';
      case 'Back-End Development':
        return 'Node.js, Python, Java, C#, PHP, Ruby, Go, Express, Django, Flask, Spring Boot';
      case 'UI/UX Design':
        return 'Figma, Adobe XD, Sketch, InVision, Zeplin, Principle, ProtoPie';
      case 'Full-Stack Development':
        return 'JavaScript, TypeScript, Python, Java, MERN, MEAN, JAMstack, GraphQL';
      case 'Database Design':
        return 'SQL, NoSQL, PostgreSQL, MySQL, MongoDB, Firebase, Redis, Elasticsearch';
      case 'Cloud Architecture':
        return 'AWS, Google Cloud, Azure, Docker, Kubernetes, Terraform, CloudFormation';
      case 'DevOps':
        return 'Docker, Kubernetes, Jenkins, GitHub Actions, CircleCI, Travis CI, Ansible, Puppet';
      case 'Security':
        return 'OWASP, OAuth, JWT, Encryption, Penetration Testing, Compliance Standards';
      case 'Machine Learning':
        return 'Python, R, TensorFlow, PyTorch, scikit-learn, Keras, NLTK, OpenCV';
      case 'Systems Programming':
        return 'C, C++, Rust, Go, Assembly, Linux Kernel Programming';
      case 'Data Analysis':
        return 'Python, R, SQL, Pandas, NumPy, Matplotlib, Tableau, Power BI';
      case 'Distributed Systems':
        return 'Go, Erlang, Elixir, Kafka, RabbitMQ, gRPC, Protocol Buffers';
      default:
        return 'Various programming languages and tools';
    }
  };

  return (
    <>
      <div 
        onClick={() => setOpen(true)}
        className={cn(
          "p-6 backdrop-blur-xl bg-background/60 border border-border/30 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-background/80 cursor-pointer group relative",
          className
        )}
      >
        <div className="mb-4 text-primary w-12 h-12 flex items-center justify-center rounded-md bg-primary/10 backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm">{description}</p>
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={16} className="text-primary" />
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] backdrop-blur-xl bg-background/90">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <span className="text-primary">{icon}</span> {title}
            </DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Tools & Languages:</h4>
              <p className="text-sm text-foreground/80 italic">{getToolsAndLanguages()}</p>
            </div>
            
            <ul className="grid grid-cols-1 gap-2">
              {detailedSkills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SkillCard;
