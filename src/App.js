import React, { Component } from 'react';
// import Home from './pages/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Post from './components/post/Post';
import SinglePost from './components/singlePost/SinglePost';
class App extends Component {
  render() {
    const user=true;
    return (
     
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        <Route path="/register">
            {user ?<Home /> : <Register />}
          </Route>
          <Route path="/login">
            {/* {user ? <Home /> :<Login/>} */}
            <Login />
          </Route>
          <Route path="/write">
          {user ?<Write /> : <Register />}
          </Route>
          <Route path="/setting">
          {user ?<Home /> : <Register />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
        
      </Router>
    );
  }
    
}

export default App;
