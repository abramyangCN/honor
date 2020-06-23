import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import TitleBullets from '../utils/TitleBullets';
import HonorBadge from '../utils/HonorBadge';

import bgImage from '../assets/images/prize/prize_bg.png';
import award01 from '../assets/images/prize/award_01.png';
import award02 from '../assets/images/prize/award_02.png';
import award03 from '../assets/images/prize/award_03.png';
import '../assets/css/sass/prize.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Prize = (props) => {
  const classes = useStyles();

  const [expand, setExpand] = useState('1');

  const handleChange = (item) => {
    setExpand(item);
  };

  return (
    <Box className='prize'>
      <Box className='prize-backgroud'>
        <Image
          aspectRatio={1440 / 935}
          src={bgImage}
          style={{ backgroundColor: 'none' }}
        ></Image>
      </Box>
      <Box className='prize-container' id='prize' name='prize'>
        <Typography variant='h2' className='title'>
          Prize
        </Typography>
        <TitleBullets />

        <div className={classes.root}>
          <div className='prize-items'>
            <div className={`prize-item ${expand === '2' ? 'expand' : ''}`}>
              <div className='prize-award'>
                <Image
                  className='prize-award-image'
                  src={award02}
                  color={'none'}
                  aspectRatio={380 / 345}
                />
              </div>
              <Paper
                className='prize-card'
                onClick={() => handleChange('2')}
                elevation={3}
              >
                <HonorBadge class='honor-badge' order='2'></HonorBadge>
                <Typography variant='h3'>Master</Typography>
                <Typography className='subtitle'>
                  &mdash; AWARD &mdash;
                </Typography>
                <Typography className='description'>
                  HONOR MagicWatch 2 <br />
                  (Random Color)
                </Typography>
              </Paper>
            </div>

            <div className={`prize-item ${expand === '1' ? 'expand' : ''}`}>
              <div className='prize-award'>
                <Image
                  className='prize-award-image'
                  src={award01}
                  style={{ backgroundColor: 'none' }}
                  aspectRatio={380 / 345}
                />
              </div>
              <Paper
                className='prize-card'
                onClick={() => handleChange('1')}
                elevation={3}
              >
                <HonorBadge order='1'></HonorBadge>
                <Typography variant='h3'>Champion</Typography>
                <Typography className='subtitle'>
                  &mdash; AWARD &mdash;
                </Typography>
                <Typography className='description'>
                  HONOR MagicBook <br />
                  (Space Gray)
                </Typography>
              </Paper>
            </div>
            <div className={`prize-item ${expand === '3' ? 'expand' : ''}`}>
              <div className='prize-award'>
                <Image
                  className='prize-award-image'
                  src={award03}
                  style={{ backgroundColor: 'none' }}
                  aspectRatio={380 / 345}
                />
              </div>
              <Paper
                className='prize-card'
                onClick={() => handleChange('3')}
                elevation={3}
              >
                <HonorBadge order='3'></HonorBadge>
                <Typography variant='h3'>Professional</Typography>
                <Typography className='subtitle'>
                  &mdash; AWARD &mdash;
                </Typography>
                <Typography className='description'>
                  HONOR Magic Earbuds <br />
                  (Pearl White)
                </Typography>
              </Paper>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Prize;
