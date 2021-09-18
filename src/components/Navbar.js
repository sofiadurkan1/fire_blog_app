import React from 'react'
import { alpha,AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AccountCircleRounded } from '@material-ui/icons';


const useStyles = makeStyles((theme) =>({
    toolbar : {
        display : 'flex',
        justifyContent : 'space-between',
        backgroundColor: '#ba000d',
    },
    user: {
        display: "flex",
        backgroundColor : alpha(theme.palette.common.white, 0.15),
        '&:hover' : {
            backgroundColor : alpha(theme.palette.common.white, 0.25),
        },
    },
    
}))

const Navbar = () => {
    const classes = useStyles();

    return (
       <AppBar>
           <Toolbar className={classes.toolbar}>
           <Typography variant='h6'>
                   DevSofi
               </Typography>
               <div className= {classes.user}>
                   <AccountCircleRounded/>
               </div>
               
           </Toolbar>
       </AppBar>
    )
}

export default Navbar;
