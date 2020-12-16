import { Box, Container, Paper,List,ListItem,ListItemText, Divider } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import AppBar from "../AppBar";
import {Link } from 'react-router-dom'
import GoBack from '../Utils/GoBack'

class Manga extends Component {
  state = {
    manga: {},
    lastRead:''
  };

  componentDidMount() {
      this.setState({lastRead:localStorage.getItem('lastRead')})
  }

  setLastRead = (chapter)=>{
      localStorage.setItem('lastRead',chapter)
  }
  

  static getDerivedStateFromProps(props, state) {
    return {
      manga: props.mangas.find(
        (manga) => manga.name === props.match.params.name
      ),
    };
  }
  render() {
    return (
      <div>
        <AppBar title={this.props.match.params.name} />
        <Box mt={5}>

        <Container>
            <GoBack path="/" />
            <Box p={1}>
              <Paper >
              <List component="nav">
              {this.state.manga?.chapters.map((chapter) => (
                <Link to={`/manga/${this.state.manga.name}/chapter/${chapter.name}`} key={chapter.name} onClick={()=>this.setLastRead(chapter.name)}>
                  <ListItem button selected={chapter.name === this.state.lastRead}>
                    <ListItemText>{chapter.name}</ListItemText>
                  </ListItem>
                  <Divider/>
                </Link>
              ))}
            </List>
              </Paper>    </Box>
        </Container>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangas: state.mangas,
});
export default connect(mapStateToProps)(withRouter(Manga));
