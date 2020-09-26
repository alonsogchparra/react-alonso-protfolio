import React from "react";
import {
  Container,
  Grid,
  Box,
  Divider,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Project from "./Project";
import Illustrations from './Illustrations';
import translate from "../../i18n/translate";
import { projects } from "../../content/projects";
import { withRouter } from 'react-router-dom';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Projects = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box width="100%">
              <Typography
                variant="h3"
                align="center"
                className="projects-title"
              >
                {translate("projectTitle")}
              </Typography>
              <Divider variant="fullWidth" className="p-divider" />
            </Box>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {projects.map((project) => {
                return (
                  <Project
                    key={project.id}
                    title={project.name}
                    descriptionEn={project.description_en}
                    descriptionEs={project.description_es}
                    developed={project.developed}
                    image={project.image}
                    link={project.link}
                    projectLink={project.projectLink}
                    video={project.video}
                    imageDetail={project.imageDetail}
                    githubLink={project.githubLink}
                  />
                );
              })}
            </Grid>

            <Box width="100%" mb={2}>
              <Typography
                variant="h3"
                align="center"
                className="projects-title"
              >
                {translate("illustrationTitle")}
              </Typography>
              <Divider variant="fullWidth" className="p-divider" />
            </Box>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Illustrations />
            </Grid>

          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default withRouter(Projects);