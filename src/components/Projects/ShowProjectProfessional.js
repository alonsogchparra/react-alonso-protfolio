import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
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
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { descAsaiEng } from '../../i18n/messages/alt-US';
import { descAsaiSpa } from '../../i18n/messages/alt-VE';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 545,
    width: 500,
    [theme.breakpoints.down('md')]: {
      maxWidth: 350,
    },
  },
  media: {
    height: 540,
  },
}));

export const ShowProjectProfessional = ({ title, imageDetail }) => {
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
              </Grid>
            </Container>
          </MuiThemeProvider>
        </div>
      )}
    </>
  );
};
