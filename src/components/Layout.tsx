
import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import { ThemeProvider } from './ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-300 relative">
        <Navigation />
        <main className="flex-grow pt-20 relative z-10">
          {children}
        </main>
        <footer className="backdrop-blur-md bg-background/60 border-t border-border/30 relative z-10 mt-16">
          <div className="container mx-auto py-8 px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-foreground/70 text-sm">
                © {new Date().getFullYear()} Computer Science Portfolio. All rights reserved.
              </p>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
