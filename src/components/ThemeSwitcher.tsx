
import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Leaf, Gamepad2, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themeOptions = [
    { name: 'light', icon: <Sun size={18} />, label: 'Light theme' },
    { name: 'dark', icon: <Moon size={18} />, label: 'Dark theme' },
    { name: 'autumn', icon: <Leaf size={18} />, label: 'Autumn theme' },
    { name: 'gaming', icon: <Gamepad2 size={18} />, label: 'Gaming theme' },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <motion.button
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full glass shadow-lg flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Theme switcher"
        >
          <Palette size={20} className="text-primary" />
        </motion.button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 backdrop-blur-xl bg-background/90 border border-border/30 rounded-lg shadow-lg" side="top">
        <AnimatePresence>
          <motion.div 
            className="flex gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {themeOptions.map((option) => (
              <motion.button
                key={option.name}
                onClick={() => {
                  setTheme(option.name as 'light' | 'dark' | 'autumn' | 'gaming');
                  setOpen(false);
                }}
                className={cn(
                  "rounded-full h-10 w-10 flex items-center justify-center transition-all",
                  theme === option.name 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-foreground/70 hover:bg-background/90'
                )}
                aria-label={option.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.icon}
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeSwitcher;
