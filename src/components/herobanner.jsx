import React from 'react';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

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

  const [open, setOpenState] = React.useState(false);

  const handleLinkOpen = () => {
    setOpenState(true);
  };

  const handleLinkClose = () => {
    setOpenState(false);
  };

  return (
    <Box id='home' className={classes.root}>
      <Grid className='hero-container' container alignItems='center'>
        <Grid item xs={1} />
        <Grid className='hero-text' item xs={5}>
          <Typography variant='h1' noWrap>
            Microsoft 365 Challenge
          </Typography>
          <p>
            Let your imagination run wild and create a piece of artwork relating
            to the theme of “Looking to the Future” and stand to win a chance to
            win a brand new HONOR MagicBook 14.
          </p>

          <Button onClick={handleLinkOpen} className='herobanner-button'>
            Explore MagicBook 14 {'>'}
          </Button>
          <Dialog
            open={open}
            onClose={handleLinkClose}
            className='herobanner-dialog'
          >
            <DialogContent>
              <DialogContentText>
                <Button
                  onClick={handleLinkClose}
                  href='//www.hihonor.com/france/product/honor-magicbook-14'
                  className='herobanner-button'
                >
                  France - Français {'>'}
                </Button>
                <Button
                  onClick={handleLinkClose}
                  href='//www.hihonor.com/germany/product/honor-magicbook-14-365'
                  className='herobanner-button'
                >
                  Germany - Deutsch {'>'}
                </Button>
                <Button
                  onClick={handleLinkClose}
                  href='//www.hihonor.com/unitedkingdom/product/honor-magicbook-14'
                  className='herobanner-button'
                >
                  United Kingdom - English {'>'}
                </Button>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Grid>
        <Grid className='hero-image' item xs={6}>
          <Image src={heroImage} aspectRatio={1832 / 1090}></Image>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;
