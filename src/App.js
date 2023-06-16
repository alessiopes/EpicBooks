import React from 'react';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LastestRelease from './components/LastestRelease';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <LastestRelease />
      <MyFooter />
    </div>
  );
}

export default App;