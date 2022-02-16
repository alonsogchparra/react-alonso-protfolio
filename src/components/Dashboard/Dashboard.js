import {
  Box,
  Button,
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
import {
  Description,
  Email,
  GitHub,
  LinkedIn,
  Twitter,
} from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import translate from '../../i18n/translate';
import { DASHBOARD } from '../../constants/Links';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Dashboard = () => {
  const isEnglish = useSelector((state) => state.translate.isEnglish);
  const coinImage = useSelector((state) => state.theme.coinImage);

  return (
    <div className='animate__animated animate__slow animate__fadeIn'>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='md'>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
            className='dash-container'
          >
            <Box>
              <Grid container justify='center' alignItems='center'>
                <Box m={2}>
                  <img src={coinImage} alt='lotus' width='120px' />
                </Box>
              </Grid>
              <Typography
                variant='h6'
                align='center'
                paragraph
                className='dash-title'
              >
                {translate('hi')}
              </Typography>
              <Divider variant='fullWidth' className='p-divider' />
              <Box m={2}>
                <Typography variant='h2' align='center' className='dash-name'>
                  Alonso Parra
                </Typography>
                <Typography
                  variant='body1'
                  align='center'
                  className='dash-skill'
                >
                  {translate('profession')}
                </Typography>
              </Box>
              <Divider className='p-divider' />

              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Box m={2} style={{ width: '100%' }}>
                  <Grid container justify='space-around' alignItems='center'>
                    <Grid>
                      <a
                        href={DASHBOARD.GITHUB}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <GitHub fontSize='large' className='dash-icon'></GitHub>
                      </a>
                    </Grid>
                    <Grid>
                      <a
                        href={DASHBOARD.LINKEDIN}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <LinkedIn
                          fontSize='large'
                          className='dash-icon'
                        ></LinkedIn>
                      </a>
                    </Grid>
                    <Grid>
                      <a
                        href={DASHBOARD.MAILT_TO}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Email fontSize='large' className='dash-icon'></Email>
                      </a>
                    </Grid>
                    <Grid>
                      <a
                        href={DASHBOARD.TWITTER}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Twitter
                          fontSize='large'
                          className='dash-icon'
                        ></Twitter>
                      </a>
                    </Grid>
                    <Grid>
                      <a
                        href={
                          isEnglish
                            ? DASHBOARD.CV_ENGLISH
                            : DASHBOARD.CV_SPANISH
                        }
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Description
                          fontSize='large'
                          className='dash-icon'
                        ></Description>
                      </a>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Box m={2}>
                  <Link to='/about'>
                    <Button className='animate__animated animate__pulse animate__slow animate__infinite'>
                      <Typography
                        variant='h4'
                        align='center'
                        className='dash-name'
                      >
                        {translate('checkMoreAboutMe')}
                      </Typography>
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default Dashboard;
