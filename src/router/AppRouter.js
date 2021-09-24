import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Navbar from '../components/Navbar';
import NewBlog from '../pages/NewBlog';
import Profile from "../pages/Profile";
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import PrivateRouter from './PrivateRouter';
import React from 'react'







const AppRouter = () => {
const [isAuth, setIsAuth] = React.useState(false);


const AuthContainer = () => (
    <div>
      <PrivateRouter isAuth={isAuth} path="/" exact component={Dashboard} />
      <PrivateRouter isAuth={isAuth} path="/profile" component={Profile} />
      <PrivateRouter isAuth={isAuth} path="/newBlog" component={NewBlog} />
      <PrivateRouter isAuth={isAuth} path="/details/:id" component={Details}/>

    </div>
  );

    return(
        <Router>
            <Navbar/>
            <Switch>
                
                <Route path="/register" component={Register}/>
                <Route
          path="/login"
          exact
          component={() => <Login setIsAuth={setIsAuth} />}
        />
        <Route component={AuthContainer} />


                {/* <Route path="/profile" component={Profile}/> */}
                {/* <Route path="/newblog" component={NewBlog}/> */}
                {/* <Route path="/" exact component={Dashboard}/> */}


               
            </Switch>
        </Router>
    )
}

export default  AppRouter;