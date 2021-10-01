import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Logout } from "../helpers/firebase";
import logo from "../assets/images/react.png";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontFamily: "Girassol",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    "& span": {
      fontSize: 30,
      color: "wheat",
    },
  },
  appBar:{
    backgroundColor:"#004682"
  },
  logo:{
    width:40,
  }
}));



const Navbar = ({setIsAuth})=> {
const classes = useStyles();

  


  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigateAndhHandleClose = (page) => {
    localStorage.clear();
    navigateTo(page);
    toggle();

    setAnchorEl(null);
  };
  const navigateTo = (page) => {
    history.push("/" + page);
  };

  const logoutPage = () => {
    Logout();

    history.push("/login");
  };
console.log(currentUser)

  


  
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          
              <IconButton
              display='flex'
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.menuButton}
              >
        <img src={logo} alt=""  className={classes.logo} onClick={() => history.push("/")} />

              </IconButton>
              <Typography variant="h6" className={classes.title}>
            ──── <span>{"<DevSofia />"}</span> BLOG ────
          </Typography>
          <div>
          <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle  style={{fontSize:"40px"}}/>
            </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                // onClose={handleClose}
              >
                {currentUser ? (
                  <div>
                    <MenuItem
                      onClick={() => navigateAndhHandleClose("newBlog")}
                    >
                      New
                    </MenuItem>
                    <MenuItem onClick={() => logoutPage()}>Logout</MenuItem>
                    <MenuItem onClick={() => navigateAndhHandleClose("profile")}>
                      Profile
                    </MenuItem>
                  </div>
                ) : (
                  <>
                    <MenuItem onClick={() => navigateAndhHandleClose("login")}>
                      Login
                    </MenuItem>
                    <MenuItem
                      onClick={() => navigateAndhHandleClose("register")}
                    >
                      Register
                    </MenuItem>
                  </>
                )}
                {/* <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
              </Menu>
              </div>
          
          
          
        </Toolbar>
      </AppBar>
      </div>
    
  );
}

export default Navbar;