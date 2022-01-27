import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Post from './pages/Post';
import EditProfilePage from './pages/EditProfilePage';
import Users from './pages/Users';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  if (!isLogin) {
    return <LandingPage />;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/message">
          <Chat />
        </Route>
        <Route path="/create-post">
          <Post />
        </Route>
        <Route path="/edit-profile">
          <EditProfilePage />
        </Route>
        <Route path="/user/:id">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
