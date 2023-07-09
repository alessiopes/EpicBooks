import React, { useState, useContext } from 'react';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LastestRelease from './components/LastestRelease';
import { ThemeProvider, ThemeContext } from './context/ThemeProvider';
import './App.css';


const App = () => {
  const [query, setQuery] = useState('');
  const { theme } = useContext(ThemeContext);

  const updateQuery = (value) => {
    setQuery(value);
  };

  return (
    <div className={`App ${theme === 'dark' ? 'dark' : ''}`}>
      <MyNavbar query={query} updateQuery={updateQuery} />
      <Welcome />
      <LastestRelease searchQuery={query} />
      <MyFooter />
    </div>
  );
}

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
