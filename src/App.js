import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import NavBar from './components/views/NavBar/NavBar'
import Footer from './components/views/Footer/Footer'
// import Auth from './hoc/auth'

import MakeTestPage from './components/views/TestPage/MakeTestPage'
import JoinRoomPage from './components/views/RoomPage/JoinRoomPage'

function App() {
  return (
   <Suspense fallback = {(<div> Loading... </div>)}>
    <Router >
      <NavBar/>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <Switch>
        {/* admin 유저만 들어가고 싶으면 Auth(page, null, true) 이런 식으로 설정하면 된다. */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path = "/maketest" component = {MakeTestPage}/>
        <Route exact path = "/joinroom" component = {JoinRoomPage}/>
      </Switch>
    </div>
    <Footer/>
    </Router>
    </Suspense>
  );
}

export default App;