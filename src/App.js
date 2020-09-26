import React from 'react';
import classes from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Navbar />
      <div className={classes.content}>
        <Profile />
        {/* <Dialogs /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
