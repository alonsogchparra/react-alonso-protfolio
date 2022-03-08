import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  CardActions,
} from '@material-ui/core';
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ComputerIcon from '@material-ui/icons/Computer';
import clsx from 'clsx';
import { descAsaiEng } from '../../i18n/messages/alt-US';
import { descAsaiSpa } from '../../i18n/messages/alt-VE';
import translate from '../../i18n/translate';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 300,
    [theme.breakpoints.down('md')]: {
      maxWidth: 350,
    },
  },
  media: {
    height: 540,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  medium: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  tiny: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    position: 'absolute',
    top: '88px',
    right: '8px',
    outline: '5px solid #d1d1d1',
  },
}));

export const ShowProjectProfessional = ({
  title,
  imageDetail,
  workplaceName,
  workplaceLogo,
  devtools,
  teams,
}) => {
  const classes = useStyles();
  const isEnglish = useSelector((state) => state.translate.isEnglish);

  return (
    <>
      {!title ? (
        <Redirect to='/' />
      ) : (
        <div
          style={{ marginTop: '30px' }}
          className='animate__animated animate__fadeIn'
        >
          <MuiThemeProvider theme={theme}>
            <Container maxWidth='lg'>
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
              >
                <Grid container justify='center' alignItems='center'>
                  <Box width='100%'>
                    <Typography
                      variant='h3'
                      align='center'
                      className='details-title'
                    >
                      {title}
                    </Typography>
                    <Divider variant='fullWidth' className='p-divider' />
                  </Box>
                </Grid>

                <Grid
                  container
                  justify='center'
                  alignItems='center'
                  style={{ marginTop: '25px' }}
                >
                  <Box boxShadow={5}>
                    <Card className={classes.root}>
                      <CardContent>
                        <img
                          src={imageDetail}
                          alt='project_image'
                          width='100%'
                        />
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                <Box my={2}>
                  <Typography
                    variant='h3'
                    align='center'
                    className='details-title'
                  >
                    {translate('description')}
                  </Typography>
                  <Divider
                    variant='fullWidth'
                    className='p-divider'
                    style={{ marginTop: '10px', marginBottom: '15px' }}
                  />

                  {isEnglish &&
                    descAsaiEng.map((desc) => (
                      <Typography
                        align='left'
                        paragraph
                        className='details-text'
                      >
                        {desc}
                      </Typography>
                    ))}

                  {!isEnglish &&
                    descAsaiSpa.map((desc) => (
                      <Typography
                        align='left'
                        paragraph
                        className='details-text'
                      >
                        {desc}
                      </Typography>
                    ))}
                </Box>

                <Grid container justify='center' alignItems='center'>
                  <Box width='100%'>
                    <Typography
                      variant='h3'
                      align='center'
                      className='details-title'
                    >
                      {translate('workplace')}
                    </Typography>
                    <Divider variant='fullWidth' className='p-divider' />
                  </Box>

                  <Box m={5}>
                    <Grid container justify='center' alignItems='center'>
                      <Avatar
                        src={workplaceLogo}
                        className={clsx(classes.medium, 'workplace-logo')}
                      />
                    </Grid>

                    <Typography
                      variant='h3'
                      align='center'
                      className='resume-college'
                      style={{ marginTop: '20px' }}
                    >
                      {workplaceName}
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  container
                  justify='center'
                  alignItems='center'
                  style={{ marginTop: '30px' }}
                >
                  <Box width='100%'>
                    <Typography
                      variant='h3'
                      align='center'
                      className='details-title'
                    >
                      {translate('tools')}
                    </Typography>
                    <Divider variant='fullWidth' className='p-divider' />
                  </Box>

                  <Grid container justify='center' alignItems='center'>
                    {devtools.map((devtool, id) => (
                      <Grid key={id} item style={{ marginTop: '20px' }}>
                        <Box m={5}>
                          <Typography align='center'>
                            <ComputerIcon
                              fontSize='large'
                              className='icon-color'
                            />
                          </Typography>
                          <Typography
                            align='center'
                            variant='h4'
                            className='details-text'
                          >
                            {devtool}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                {/* TEAM */}

                <Grid
                  container
                  justify='center'
                  alignItems='center'
                  style={{ marginTop: '30px' }}
                >
                  <Box width='100%'>
                    <Typography
                      variant='h3'
                      align='center'
                      className='details-title'
                    >
                      {translate('team')}
                    </Typography>
                    <Divider variant='fullWidth' className='p-divider' />
                  </Box>

                  <Grid container style={{ marginTop: '25px' }}>
                    {teams.map((team) => (
                      <Box width='100%' marginTop={2}>
                        <Typography
                          variant='h3'
                          align='left'
                          className='details-title'
                        >
                          {team.position}
                        </Typography>
                        <Divider variant='fullWidth' className='p-divider' />

                        <Grid
                          container
                          direction='row'
                          justify='center'
                          alignItems='center'
                        >
                          {team.members.map((member) => (
                            <Grid item>
                              <Box m={2} boxShadow={5}>
                                <Card
                                  style={{ height: '100%' }}
                                  className={clsx(
                                    classes.root,
                                    'project-content'
                                  )}
                                >
                                  <CardContent>
                                    <Grid
                                      container
                                      justify='center'
                                      alignItems='center'
                                    >
                                      <Box style={{ position: 'relative' }}>
                                        <Avatar
                                          alt={member.name}
                                          src={member.profile}
                                          className={clsx(
                                            classes.large,
                                            'workplace-logo'
                                          )}
                                        />
                                        <Avatar
                                          alt={member.country}
                                          src={member.country}
                                          className={classes.tiny}
                                        />
                                      </Box>
                                    </Grid>

                                    <Box marginTop={2}>
                                      <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='h2'
                                        className='project-title'
                                        align='center'
                                      >
                                        {member.name}
                                        <Typography
                                          gutterBottom
                                          // variant='h5'
                                          component='h2'
                                          className='project-title'
                                        >
                                          {member.role}
                                        </Typography>
                                      </Typography>
                                    </Box>
                                  </CardContent>
                                  <Divider className='project-divider' />
                                  {/* REDES */}
                                  <CardActions>
                                    <Box style={{ width: '100%' }}>
                                      <Grid
                                        container
                                        direction='row'
                                        justify='space-around'
                                        alignItems='center'
                                      >
                                        <Grid>
                                          <a
                                            href={member.links[0]}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                          >
                                            <GitHub
                                              fontSize='medium'
                                              className={`links-icons ${
                                                member.links[0] === null
                                                  ? 'links-icons-disabled'
                                                  : null
                                              }`}
                                            />
                                          </a>
                                        </Grid>
                                        <Grid>
                                          <a
                                            href={member.links[1]}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                          >
                                            <LinkedIn
                                              fontSize='medium'
                                              className={`links-icons ${
                                                member.links[1] === null
                                                  ? 'links-icons-disabled'
                                                  : null
                                              }`}
                                            />
                                          </a>
                                        </Grid>
                                        <Grid>
                                          <a
                                            href={member.links[2]}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                          >
                                            <Twitter
                                              fontSize='medium'
                                              className={`links-icons ${
                                                member.links[2] === null
                                                  ? 'links-icons-disabled'
                                                  : null
                                              }`}
                                            />
                                          </a>
                                        </Grid>
                                      </Grid>
                                    </Box>
                                  </CardActions>
                                </Card>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </MuiThemeProvider>
        </div>
      )}
    </>
  );
};
