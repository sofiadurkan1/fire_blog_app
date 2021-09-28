import React,{ useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import logo from "../assets/images/user.jpeg";
import { AuthContext } from '../contexts/AuthContext';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    marginAutoContainer: {
      width: 500,
      height: 80,
      display: 'flex',
      backgroundColor: 'gold',
    },
    marginAutoItem: {
      margin: 'auto'
    },
    alignItemsAndJustifyContent: {
      width: "70%",
      height: "70%",
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      marginTop:'30px',
      textAlign:'center'
    },
  }))



export default function MediaCard() {
    const classes = useStyles()


  const { currentUser } = useContext(AuthContext);

  return (
    <Card className={classes.alignItemsAndJustifyContent}
    
    >
      <CardMedia
        component="img"
       
        image={logo}
        alt="profil pic"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight={900} fontSize={24}>
          {currentUser?.email }
        </Typography>
        
        <Typography variant="body2" color="text.secondary" fontWeight={900} fontSize={24} lineHeight={1.8}>
            Frontend Developer || React Developer || Web Designer
          
        </Typography>
      </CardContent>
      
    </Card>
  );
}
