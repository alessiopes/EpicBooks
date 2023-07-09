import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
