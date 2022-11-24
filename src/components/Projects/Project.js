import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300,
      height: '100%',
    },
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 250,
  },
}));

const Project = ({
  title,
  image,
  description,
  previewMessage,
  developed,
  link,
  projectLink,
  video,
  imageDetail,
  githubLink,
  typeProject,
  workplaceName,
  workplaceLogo,
  devTools,
  teams,
}) => {
  const classes = useStyles();
  const isEnglish = useSelector((state) => state.translate.isEnglish);

  return (
    <div>
      <Grid item>
        <Box m={2} boxShadow={5}>
          <Card
            className={clsx(classes.root, 'project-content')}
            style={{ height: '100%' }}
          >
            <CardActionArea>
              <Link
                to={{
                  pathname: `/projects/${projectLink}`,
                  aboutProps: {
                    title,
                    description,
                    developed,
                    video,
                    imageDetail,
                    githubLink,
                    link,
                    typeProject,
                    workplaceName,
                    workplaceLogo,
                    devTools,
                    teams,
                  },
                }}
                className='project-link'
              >
                <CardMedia
                  className={classes.media}
                  image={image}
                  title={title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    className='project-title'
                  >
                    {title}
                  </Typography>
                  <Typography noWrap className='project-description'>
                    {typeProject === 'personal' ? description : previewMessage}
                  </Typography>
                </CardContent>
              </Link>
              <Divider className='project-divider' />
            </CardActionArea>
            <CardActions>
              <Link
                to={{
                  pathname: `/projects/${projectLink}`,
                  aboutProps: {
                    title,
                    description,
                    developed,
                    video,
                    imageDetail,
                    githubLink,
                    link,
                    typeProject,
                    workplaceName,
                    workplaceLogo,
                    devTools,
                    teams,
                  },
                }}
                className='project-link project-option'
              >
                <Button
                  size='small'
                  color='primary'
                  className='project-link project-option'
                >
                  {isEnglish ? 'More Details' : 'Mas Detalles'}
                </Button>
              </Link>
              <a
                href={link}
                rel='noopener noreferrer'
                target='_blank'
                className='project-link'
              >
                {typeProject === 'personal' && (
                  <Button
                    size='small'
                    color='primary'
                    className='project-link project-option'
                  >
                    {isEnglish ? 'Check Project' : 'Mira el Proyecto'}
                  </Button>
                )}
              </a>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </div>
  );
};

export default withRouter(Project);
