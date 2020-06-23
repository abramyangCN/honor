import React from 'react';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import heroImage from '../assets/images/herobanner/hero-image.png';

const Tutorial = (props) => {
  return (
    <Box id='tutorial'>
      <h2>Tutorial</h2>
      <Image className="" src={heroImage}></Image>
    </Box>
  );
};

export default Tutorial;
