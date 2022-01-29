import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Post from './pages/Post';
import EditProfilePage from './pages/EditProfilePage';
import Users from './pages/Users';
import { UserContext } from './context/userContext';
import { setAuthToken, API } from './config/api';

function App() {
  const [state, dispatch] = useContext(UserContext);
  setAuthToken(localStorage.token);

  const checkAuth = async () => {
    try {
      const response = await API.get('/check-auth');
      dispatch({
        type: 'CHECK_AUTH',
        payload: response.data.user,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  if (!state.isLogin) {
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
