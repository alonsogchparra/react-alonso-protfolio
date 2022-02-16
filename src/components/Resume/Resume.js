import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { Description } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import translate from '../../i18n/translate';
import Experience from './Experience';
import Technologies from './Technologies';
import { RESUMEN } from '../../constants/Links';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
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
}));

const Resume = () => {
  const classes = useStyles();
  const isEnglish = useSelector((state) => state.translate.isEnglish);

  return (
    <div style={{ marginTop: '30px' }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Grid className='animate__animated animate__fadeIn'>
              <Box>
                <Avatar
                  alt='Alonso Parra'
                  src={RESUMEN.PROFILE_PHOTO}
                  className={classes.large}
                />
              </Box>
            </Grid>

            <Grid
              container
              justify='center'
              alignItems='center'
              className='animate__animated animate__fadeIn'
            >
              <Box m={1}>
                <Typography variant='h3' className='resume-title'>
                  {translate('resume')}
                </Typography>
              </Box>
              <Box m={1}>
                <a
                  href={isEnglish ? RESUMEN.CV_ENGLISH : RESUMEN.CV_SPANISH}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <Description
                    fontSize='large'
                    style={{ fontSize: '3.1875rem' }}
                    className='resume-icon animate__animated animate__fadeIn'
                  />
                </a>
              </Box>
            </Grid>

            <Grid container>
              <Box width='100%' mb={2}>
                <Typography variant='h4' className='resume-education'>
                  {translate('education')}
                </Typography>
                <Divider className='p-divider' />
              </Box>
            </Grid>

            <Grid
              container
              justify='center'
              alignItems='center'
              style={{ marginBottom: '2.2rem' }}
              className='animate__animated animate__fadeIn'
            >
              <Box m={2}>
                <Grid
                  container
                  justify='center'
                  alignItems='center'
                  style={{ marginBottom: '10px' }}
                >
                  <Avatar src={RESUMEN.ULA} className={classes.large} />
                </Grid>
                <Typography
                  variant='h5'
                  align='center'
                  className='resume-college'
                >
                  Universidad de los Andes. Mérida, Venezuela.
                </Typography>
                <Typography
                  variant='body1'
                  align='center'
                  className='resume-college-time'
                >
                  {translate('january')} 2008 - {translate('december')} 2015
                </Typography>
              </Box>
            </Grid>

            <Grid container>
              <Box width='100%' mb={2}>
                <Typography variant='h4' className='resume-education'>
                  {translate('technologies')}
                </Typography>
                <Divider className='p-divider' />
              </Box>
            </Grid>

            <Technologies size={classes.small} />

            <Grid container>
              <Box width='100%' mb={2}>
                <Typography variant='h4' className='resume-education'>
                  {translate('experience')}
                </Typography>
                <Divider className='p-divider' />
              </Box>
            </Grid>

            <Grid
              container
              justify='center'
              alignItems='center'
              className='animate__animated animate__fadeIn'
            >
              <Experience
                imgLogo={RESUMEN.UAKAMI}
                logoSize={classes.medium}
                place='Uakami Studios'
                time='2016 - Jun 2017'
                profession={true}
              />

              <Experience
                imgLogo={RESUMEN.LIKINVENT}
                logoSize={classes.medium}
                place='Likinvent Studios'
                time='2015 - 2017'
                profession={false}
              />

              <Experience
                imgLogo={RESUMEN.VASCAR}
                logoSize={classes.medium}
                place='Vascar Solutions'
                time='Jul 2017 - Mar 2018'
                profession={true}
              />

              <Experience
                imgLogo={RESUMEN.GO_APPS}
                logoSize={classes.medium}
                place='Go Apps'
                time='Nov 2018 - Mar 2019'
                profession={true}
              />

              <Experience
                imgLogo={RESUMEN.QARONI}
                logoSize={classes.medium}
                place='Qaroní'
                time='Oct 2020 - Mar 2021'
                profession={true}
              />

              <Experience
                imgLogo={RESUMEN.ARKUSNEXUS}
                logoSize={classes.medium}
                place='Arkusnexus'
                time='Jul 2021 - '
                currentJob={true}
                profession={true}
              />
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default Resume;
