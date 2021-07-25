import React, { Component } from 'react';
// import Home from './pages/Home';
import TopBar from './component/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Post from './component/post/Post';
// import SinglePost from './component/singlePost/SinglePost';
class App extends Component {
  render() {
    const user=false;
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
            {user ? <Home /> :<Login/>}
          </Route>
          <Route path="/write">
          {user ?<Write /> : <Register />}
          </Route>
          <Route path="/setting">
          {user ?<Setting /> : <Register />}
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
