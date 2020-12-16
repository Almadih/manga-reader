import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Grid,
} from "@material-ui/core";
import {withRouter} from 'react-router-dom'
function AppBarWrapper(props) {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Typography variant="h6">Manga</Typography>
      <Grid container justify="center">
        <Grid item>

      <Typography variant="h6">{props.title}</Typography>
        </Grid>
      </Grid>
      </Toolbar>
    </AppBar>
  );
}



export default withRouter(AppBarWrapper)