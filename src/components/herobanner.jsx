import React from 'react';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import heroImage from '../assets/images/herobanner/hero-image.png';
import '../assets/css/sass/herobanner.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HeroBanner = (props) => {
  const classes = useStyles();
  return (
    <Box id='home' className={classes.root}>
      <Grid container alignItems='center'>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <Typography variant='h1' noWrap>
            Ramp Up Your Productivity
          </Typography>
          <p>12-month subscription of Microsoft 365 Personal included</p>
        </Grid>
        <Grid item xs={6}>
          <Image src={heroImage} aspectRatio={1832 / 1090}></Image>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;
