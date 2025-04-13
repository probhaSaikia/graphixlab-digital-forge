
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className="text-yellow-500 dark:text-gray-400" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-electric-blue data-[state=unchecked]:bg-gray-300"
      />
      <Moon size={18} className="text-gray-400 dark:text-electric-blue" />
    </div>
  );
};

export default ThemeToggle;
