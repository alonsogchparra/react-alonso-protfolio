import { Box, Grid, Tooltip } from '@material-ui/core';
import React from 'react';
import { ReactComponent as IllustratorIcon } from '../../media/images/technologies/ai.svg';
import { ReactComponent as BootstrapIcon } from '../../media/images/technologies/bootstrap.svg';
import { ReactComponent as CssIcon } from '../../media/images/technologies/css.svg';
import { ReactComponent as HtmlIcon } from '../../media/images/technologies/html.svg';
import { ReactComponent as JsIcon } from '../../media/images/technologies/js.svg';
import { ReactComponent as PhotoshopIcon } from '../../media/images/technologies/ps.svg';
import { ReactComponent as ReactIcon } from '../../media/images/technologies/react.svg';

const Technologies = ({ size }) => {
  return (
    <div className='animate__animated animate__fadeIn'>
      <Grid container justify='center' alignItems='center'>
        <Box m={5} className={size}>
          <Tooltip title='React.js'>
            <ReactIcon />
          </Tooltip>
        </Box>

        <Box m={5} className={size}>
          <Tooltip title='React Native'>
            <ReactIcon />
          </Tooltip>
        </Box>

        <Box m={5} className={size}>
          <Tooltip title='HTML5'>
            <HtmlIcon />
          </Tooltip>
        </Box>

        <Box m={5} className={size}>
          <Tooltip title='CSS3'>
            <CssIcon />
          </Tooltip>
        </Box>

        <Box m={5} className={size}>
          <Tooltip title='Javascript'>
            <JsIcon />
          </Tooltip>
        </Box>

        <Box m={5} className={size}>
          <Tooltip title='Bootstrap'>
            <BootstrapIcon />
          </Tooltip>
        </Box>

        <Box m={5} className={size}>
          <Tooltip title='Adobe Illustrator'>
            <IllustratorIcon />
          </Tooltip>
        </Box>

        <Box m={5} className={size}>
          <Tooltip title='Adobe Photoshop'>
            <PhotoshopIcon />
          </Tooltip>
        </Box>
      </Grid>
    </div>
  );
};

export default Technologies;
