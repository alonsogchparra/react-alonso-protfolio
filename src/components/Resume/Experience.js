import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import translate from '../../i18n/translate';

const Experience = ({
  imgLogo,
  place,
  logoSize,
  time,
  profession,
  currentJob = false,
  job = 'devFrontend'
}) => {
  return (
    <>
      <Box m={2}>
        <Grid
          container
          justify='center'
          alignItems='center'
          style={{ marginBottom: '10px' }}
        >
          <Avatar src={imgLogo} className={clsx(logoSize, 'workplace-logo')} />
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
            {translate(job)}
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
