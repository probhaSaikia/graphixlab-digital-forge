
import React, { createContext, useContext } from 'react';

type ThemeType = 'dark';

interface ThemeContextType {
  theme: ThemeType;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Always use dark theme
  const theme: ThemeType = 'dark';

  React.useEffect(() => {
    // Set dark theme on document elements
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
    
    // Also add class to body
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
