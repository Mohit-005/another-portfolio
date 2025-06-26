
import React from 'react';
import { cn } from '@/lib/utils';
import { Award, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  className?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, className }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Card 
        onClick={() => setOpen(true)}
        className={cn(
          "overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group",
          className
        )}
      >
        <div className="h-48 overflow-hidden">
          <img 
            src={certificate.image} 
            alt={certificate.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg line-clamp-1">{certificate.name}</CardTitle>
          <CardDescription className="flex items-center gap-1">
            <Award size={14} />
            {certificate.issuer}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-foreground/70 line-clamp-2">{certificate.description}</p>
        </CardContent>
        <CardFooter className="pt-0 flex justify-between">
          <p className="text-xs text-foreground/50">{certificate.date}</p>
          <ExternalLink 
            size={16} 
            className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </CardFooter>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[700px] backdrop-blur-xl bg-background/90">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <Award className="text-primary" /> {certificate.name}
            </DialogTitle>
            <DialogDescription>
              Issued by {certificate.issuer} on {certificate.date}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="rounded-lg overflow-hidden mb-4 border">
              <img 
                src={certificate.image} 
                alt={certificate.name} 
                className="w-full object-contain"
              />
            </div>
            
            <p className="text-foreground/80 mb-4">{certificate.description}</p>
            
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificateCard;
