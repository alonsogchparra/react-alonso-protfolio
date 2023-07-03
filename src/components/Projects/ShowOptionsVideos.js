import { Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import translate from '../../i18n/translate';

export const ShowOptionsVideos = ({ videosContainer, setVideoToShow }) => {
  return (
    <Box mt={5}>
      <Typography
        align='center'
        style={{ marginBottom: '20px' }}
        className='details-text'
      >
        <strong>{translate('descProjectPresentations')}</strong>
      </Typography>
      <Grid
        container
        spacing={3}
        direction='row'
        className='video-to-show-buttons'
      >
        {videosContainer &&
          videosContainer.map((video, i) => (
            <Grid item>
              <Button
                variant='outlined'
                onClick={() => setVideoToShow(video)}
                fullWidth
                className='btn-video-to-show'
              >
                Video Nº {i + 1}
              </Button>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
