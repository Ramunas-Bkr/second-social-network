import React from 'react';
import classes from './App.module.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
