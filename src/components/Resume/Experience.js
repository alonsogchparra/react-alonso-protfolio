import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import translate from '../../i18n/translate';

const Experience = ({
  imgLogo,
  place,
  logoSize,
  time,
  profession,
  currentJob = false,
}) => {
  return (
    <>
      <Box m={2}>
        <Grid container justify='center' alignItems='center'>
          <Avatar src={imgLogo} className={logoSize} />
        </Grid>
        <Typography variant='h5' align='center' className='resume-college'>
          {place}
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          className='resume-college-time'
        >
          {time}
          {currentJob ? translate('currently') : null}
        </Typography>
        {profession ? (
          <Typography variant='body1' align='center' className='resume-college'>
            {translate('devFrontend')}
          </Typography>
        ) : (
          <Typography variant='body1' align='center' className='resume-college'>
            {translate('devGame')}, {translate('illustrator')}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Experience;
