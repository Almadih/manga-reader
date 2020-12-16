import React from "react";
import { Grid, Box, Button, Icon, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
function GoBack(props) {
  return (
    <Grid container justify={props.justify}>
      <Grid item md={8} container xs={12}>
        <Grid item xs={props.xs}>
          <Box ml={0} mt={4}>
            <Button
              startIcon={<Icon>west</Icon>}
              onClick={() =>
     
                   props.history.push(props.path)

              }
            >
              Go Back
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4} className="text-center">
          <Box ml={0} mt={4}>
            <Typography variant="h5">{props.title}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withRouter(GoBack);
