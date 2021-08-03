import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 845,
    width: 500,
    [theme.breakpoints.down("md")]: {
      maxWidth: 350,
    },
  },
  media: {
    height: 540,
  },
}));

const ProjectDetails = ({ location }) => {
  const {
    title,
    descriptionEn,
    descriptionEs,
    developed,
    video,
    imageDetail,
    link,
    githubLink,
  } = location.aboutProps;
  const classes = useStyles();
  const isEnglish = useSelector((state) => state.translate.isEnglish);

  const checkVideo = (video, imageDetail) => {
    if (video === null) {
      return (
        <Grid container justify="center" alignItems="center">
          <Box boxShadow={5}>
            <Card className={classes.root}>
              <CardContent>
                <img src={imageDetail} alt="project_image" width="100%" />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      );
    } else {
      return (
        <Grid container justify="center" alignItems="center">
          <Box boxShadow={5}>
            <Card className={classes.root}>
              <CardContent>
                <iframe
                  src={video}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  title="video"
                  width="100%"
                  height="250"
                />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      );
    }
  };

  return (
    <div
      style={{ marginTop: "30px" }}
      className="animate__animated animate__fadeIn"
    >
      <MuiThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid container justify="center" alignItems="center">
              <Box width="100%">
                <Typography
                  variant="h3"
                  align="center"
                  className="details-title"
                >
                  {title}
                </Typography>
                <Divider variant="fullWidth" className="p-divider" />
              </Box>
            </Grid>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {developed.map((dev, i) => {
                return (
                  <Box m={2} key={i}>
                    <Typography variant="body1" className="details-dev">
                      <strong>{dev}</strong>
                    </Typography>
                  </Box>
                );
              })}
            </Grid>

            {checkVideo(video, imageDetail)}

            <Box my={2}>
              <Divider
                variant="fullWidth"
                className="p-divider"
                style={{ marginTop: "10px", marginBottom: "15px" }}
              />
              <Typography align="left" paragraph className="details-text">
                {isEnglish ? descriptionEn : descriptionEs}
              </Typography>
              <Divider variant="fullWidth" className="p-divider" />
              {link === null ? (
                ""
              ) : (
                <Box mt={2}>
                  <Typography
                    variant="h4"
                    align="center"
                    paragraph
                    className="details-text"
                  >
                    {isEnglish
                      ? "Check the project live "
                      : "Puedes revisar el proyecto "}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="details-link"
                    >
                      {isEnglish ? "here" : "aqui"}
                    </a>
                  </Typography>
                </Box>
              )}
              {githubLink === null ? (
                ""
              ) : (
                <Box>
                  <Typography
                    variant="h4"
                    align="center"
                    paragraph
                    className="details-text"
                  >
                    {isEnglish
                      ? "You can check the repository of this project "
                      : "Puedes revisar el repositorio de este proyecto "}
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="details-link"
                    >
                      {isEnglish ? "here" : "aqui"}
                    </a>
                  </Typography>
                </Box>
              )}
              <Divider variant="fullWidth" className="p-divider" />
            </Box>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default ProjectDetails;
