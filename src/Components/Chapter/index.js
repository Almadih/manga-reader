import { Box, Button, Container, Grid, Icon, Paper } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AppBar from "../AppBar";
import GoBack from "../Utils/GoBack";
class Chapter extends Component {
  state = {
    chapter: {},
    manga: {},
    next: "",
    prev: "",
  };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      chapter: props.mangas
        .find((manga) => manga.name === props.match.params.name)
        ?.chapters.find((chapter) => chapter.name === props.match.params.id),
      manga: props.mangas.find(
        (manga) => manga.name === props.match.params.name
      ),
    };
  }

  componentDidMount() {
    const { manga } = this.state;
    const { id } = this.props.match.params;

    let chapterIndex = manga?.chapters.findIndex(
      (chapter) => chapter.name === id
    );
    if (chapterIndex + 1 !== manga.chapters.length) {
      this.setState({ next: manga.chapters[chapterIndex + 1].name });
    }

    if (chapterIndex !== 0) {
      this.setState({ prev: manga.chapters[chapterIndex - 1].name });
    }
  }

  next = () => {
    const { name } = this.props.match.params;
    this.props.history.push(`/manga/${name}/chapter/${this.state.next}`);
    setTimeout(() => {
      const { manga } = this.state;
      let chapterIndex = manga.chapters.findIndex(
        (chapter) => chapter.name === this.props.match.params.id
      );
      if (chapterIndex + 1 !== manga.chapters.length) {
        this.setState({ next: manga.chapters[chapterIndex + 1].name });
      }
    }, 100);
    window.scrollTo(0, 0);
  };

  prev = () => {
    const { name } = this.props.match.params;
    this.props.history.push(`/manga/${name}/chapter/${this.state.prev}`);
    setTimeout(() => {
      const { manga } = this.state;

      let chapterIndex = manga.chapters.findIndex(
        (chapter) => chapter.name === this.props.match.params.id
      );

      if (chapterIndex !== 0) {
        this.setState({ prev: manga.chapters[chapterIndex - 1].name });
      }
    }, 100);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <AppBar
          title={`${this.props.match.params.name} - chapter ${this.props.match.params.id}`}
        />
        <Box mt={5}>
          <Container>
            <GoBack path={`/manga/${this.props.match.params.name}`} />
            {this.state.chapter?.pages.map((page) => (
              <Box p={1}>
                <Paper>
                  <img src={page} width="100%" alt={`${this.props.match.params.name} - chapter ${this.props.match.params.id}`} key={`${this.props.match.params.name} - chapter ${this.props.match.params.id}`} />
                </Paper>
              </Box>
            ))}
            <Box p={1}>
              <Grid container justify="space-between">
                <Grid item xs={4}>
                  <Button
                    disabled={this.state.prev === ""}
                    variant="contained"
                    color="primary"
                    onClick={this.prev}
                    startIcon={<Icon>arrow_left</Icon>}
                  >
                    Prev Chapter
                  </Button>
                </Grid>
                <Grid item xs={4} className="text-right">
                  <Button
                    disabled={this.state.next === ""}
                    variant="contained"
                    color="primary"
                    onClick={this.next}
                    endIcon={<Icon>arrow_right</Icon>}
                  >
                    Next Chapter
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangas: state.mangas,
});
export default connect(mapStateToProps)(withRouter(Chapter));
