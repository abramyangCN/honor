import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import isMobile from 'ismobilejs';

import TitleBullets from '../utils/TitleBullets';

import bgImage from '../assets/images/join/join_bg.png';
import step01 from '../assets/images/join/step01.png';
import step02 from '../assets/images/join/step02.png';
import step03 from '../assets/images/join/step03.png';
import timeline from '../assets/images/join/timeline.png';
import timelineMobile from '../assets/images/join/timeline_mobile.png';

import '../assets/css/sass/join.scss';

const isMob = isMobile().phone;

const Join = (props) => {
  return (
    <Box className='join'>
      <Box className='join-backgroud'>
        <Image
          aspectRatio={1440 / 1440}
          src={bgImage}
          style={{ backgroundColor: 'none' }}
        ></Image>
      </Box>
      <Box className='join-container' id='join' name='join'>
        <Typography variant='h2' className='title'>
          How To Join
        </Typography>
        <TitleBullets />

        <Grid
          className='steps-container'
          justify='center'
          adjust-content='center'
          container
        >
          <Grid item xs>
            <Link href='//hihonor.com/global/'>
              <Image
                aspectRatio={338 / 235}
                src={step01}
                style={{ backgroundColor: 'none' }}
              ></Image>
            </Link>
          </Grid>
          <Grid item xs>
            <Image
              aspectRatio={338 / 235}
              src={step02}
              style={{ backgroundColor: 'none' }}
            ></Image>
          </Grid>
          <Grid item xs>
            <Link href='//hihonor.com/global/events/microsoft365-challenge/'>
              <Image
                aspectRatio={338 / 235}
                src={step03}
                style={{ backgroundColor: 'none' }}
              ></Image>
            </Link>
          </Grid>
        </Grid>
        <div className='timeline'>
          <Image
            aspectRatio={isMob ? 670 / 836 : 1440 / 294}
            src={isMob ? timelineMobile : timeline}
            style={{ backgroundColor: 'none' }}
          ></Image>
        </div>
      </Box>
    </Box>
  );
};

export default Join;
