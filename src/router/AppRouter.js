import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Navbar from '../components/Navbar';
import NewBlog from '../pages/NewBlog';
import Profile from "../pages/Profile";
import Dashboard from '../pages/Dashboard'


const AppRouter = () => {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/newblog" component={NewBlog}/>
                <Route path="/" exact component={Dashboard}/>


               
            </Switch>
        </Router>
    )
}

export default  AppRouter;