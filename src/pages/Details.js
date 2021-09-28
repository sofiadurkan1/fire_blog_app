// import React from 'react';
// import { useParams } from 'react-router';
// import { useFetch } from '../helpers/functions';

// const Details = () => {
//   const { blogsWithId, isLoading } = useFetch();

//     const {id} = useParams()
//     console.log(id);
//     return (
//         <div>
//             <h1>Details</h1>

//         </div>
//     )
// }

// export default Details

import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory, useParams } from "react-router";
import { deleteHandler, updateInfo } from "../helpers/functions";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Grid from "@material-ui/core/Grid";
import { AuthContext } from "../contexts/AuthContext";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,

    height: "100vh",
    width: "100vh",
    alignItem: "center",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const selectedTitle = localStorage.getItem("title");
  const selectedId = localStorage.getItem("id");
  const selectedImage = localStorage.getItem("image");
  const selectedContent = localStorage.getItem("content");
  const selectedUser = localStorage.getItem("user");

  const { currentUser } = useContext(AuthContext);

  const [showButton, setShowButton] = useState(currentUser?.email === selectedUser);


  let history = useHistory();
  const deleteAndNavigate = (id) => {
    deleteHandler(id);
    history.push("/");
  };
  const storeAndNavigate = () => {
   
    history.push("/newBlog");

  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Card className={classes.root}>
        <CardContent>
          <CardMedia className={classes.media} />
          <img src={selectedImage} alt="" />
          <Typography gutterBottom variant="h5" component="h2">
            {selectedTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {selectedContent}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {selectedUser}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
        </CardActions>   
      </Card>
         { showButton ? 
         (
           <>
         <Button  onClick={() => storeAndNavigate()} > UPDATE</Button> 
          <Button
            textAlign="center"
            className="delete"
            onClick={() => deleteAndNavigate(selectedId)}
          >
            DELETE
          </Button>
          </> ): ""
          }
    </Grid>
  );
}
