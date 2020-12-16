import {
  Box,
  Container,

  Paper,

  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "../AppBar";
import { Link } from "react-router-dom";
class Home extends Component {
  
  render() {
    return (
      <div>
        <AppBar />
        <Box mt={10}>
        <Container>
          <Paper>
            <List component="nav">
              {this.props.mangas.map((manga) => (
                <Link to={`/manga/${manga.name}`} key={manga.name}>
                  <ListItem button>
                    <ListItemText>{manga.name}</ListItemText>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Paper>
        </Container>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangas: state.mangas,
});

export default connect(mapStateToProps)(Home);
