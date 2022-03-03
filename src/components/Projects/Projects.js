import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { projects } from '../../content/projects';
import translate from '../../i18n/translate';
import Illustrations from './Illustrations';
import Pagination from './Pagination';
import Project from './Project';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectPerPage] = useState(6);

  // Get Current Projects
  const indexOfLastPost = currentPage * projectPerPage;
  const indexofFirstPost = indexOfLastPost - projectPerPage;
  const currentProjects = projects.slice(indexofFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{ marginTop: '30px', overflowY: 'hidden', overflowX: 'hidden' }}
      className='animate__animated animate__fadeIn'
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Box width='100%'>
              <Typography
                variant='h3'
                align='center'
                className='projects-title'
              >
                {translate('projectTitle')}
              </Typography>
              <Divider variant='fullWidth' className='p-divider' />
            </Box>

            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              {currentProjects?.map((project) => {
                return (
                  <Project
                    key={project.id}
                    title={project.name}
                    description={project?.description}
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

            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid>
                <Box mb={1}>
                  <Typography
                    variant='h4'
                    align='right'
                    className='projects-title'
                  >
                    {translate('pageNumber')}
                  </Typography>
                </Box>
              </Grid>

              <Box
                mb={5}
                width='100%'
                justifyContent='center'
                alignItems='center'
              >
                <Divider variant='fullWidth' className='p-divider' />
                <Grid container justify='center' alignItems='center'>
                  <Pagination
                    currentPage={currentPage}
                    projectPerPage={projectPerPage}
                    totalProjects={projects.length}
                    paginate={paginate}
                  />
                </Grid>
                <Divider variant='fullWidth' className='p-divider' />
              </Box>
            </Grid>

            <Box width='100%' mt={2} mb={2}>
              <Typography
                variant='h3'
                align='center'
                className='projects-title'
              >
                {translate('illustrationTitle')}
              </Typography>
              <Divider variant='fullWidth' className='p-divider' />
            </Box>

            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
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
