import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { projects } from '../../content/projects';
import { workProjects } from '../../content/workProjects';
import translate from '../../i18n/translate';
import Illustrations from './Illustrations';
import Pagination from './Pagination';
import Project from './Project';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Projects = () => {
  const [typeProject, setTypeProject] = useState('personal');

  const [currentPage, setCurrentPage] = useState(1);
  const [projectPerPage] = useState(6);

  // Get Current Projects
  const indexOfLastPost = currentPage * projectPerPage;
  const indexofFirstPost = indexOfLastPost - projectPerPage;
  const currentProjects =
    typeProject === 'personal'
      ? projects.slice(indexofFirstPost, indexOfLastPost)
      : workProjects.slice(indexofFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const typeProyectHandler = () => {
    if (typeProject === 'personal') {
      setTypeProject('professional');
    } else {
      setTypeProject('personal');
    }
  };

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

              {/* Personal or Professional radio button */}

              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
              >
                <Box marginTop={3} marginBottom={3}>
                  <FormControl>
                    <Typography align='center' className='about-text'>
                      {translate('projectsType')}
                    </Typography>

                    <RadioGroup
                      row
                      name='controlled-radio-buttons-group'
                      defaultValue={typeProject}
                      value={typeProject}
                      onChange={typeProyectHandler}
                    >
                      <FormControlLabel
                        value='personal'
                        control={<Radio className='personal-option' />}
                        label={translate('personals')}
                        className='about-text'
                      />
                      <FormControlLabel
                        value='professional'
                        control={<Radio className='professional-option' />}
                        label={translate('professionals')}
                        className='about-text'
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Grid>
            </Box>

            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
            >
              {currentProjects?.map((project) => {
                return (
                  <>
                    <div className='animate__animated animate__fadeIn'>
                      <Project
                        key={project.id}
                        title={project.name}
                        description={
                          typeProject === 'professional'
                            ? null
                            : project?.description
                        }
                        previewMessage={project?.previewMessage}
                        developed={project.developed}
                        image={project.image}
                        link={project.link}
                        projectLink={project.projectLink}
                        video={project.video}
                        imageDetail={project.imageDetail}
                        githubLink={project.githubLink}
                        typeProject={typeProject}
                      />
                    </div>
                  </>
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
                    totalProjects={
                      typeProject === 'personal'
                        ? projects.length
                        : workProjects.length
                    }
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
