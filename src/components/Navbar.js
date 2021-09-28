import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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




const MenuAppBar = ({setIsAuth})=> {
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

  const useStyles = makeStyles({
    logo: {
      maxWidth: 80,
     
    },
    
  });
  const classes = useStyles();
  
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgrounColor: "white"}}>
        <Toolbar>
        <img src={logo} alt=""  className={classes.logo} onClick={() => history.push("/")} />
          {(
            <div>
              <IconButton
              display='flex'
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
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
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuAppBar;