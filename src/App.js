import React from 'react';
import { Route } from 'react-router-dom';
import classes from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Navbar navbarState={props.state.sideBar} />
      <div className={classes.content}>
        <Route path='/profile' render={() => <Profile profileState={props.state.profilePage} />} />
        <Route path='/dialogs' render={() => <Dialogs messagesState={props.state.messagesPage} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
      <Footer />
    </div>

  );
}

export default App;
