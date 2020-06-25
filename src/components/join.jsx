import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import isMobile from 'ismobilejs';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DropzoneArea } from 'material-ui-dropzone';
import { AttachFile } from '@material-ui/icons';
import TitleBullets from '../utils/TitleBullets';
import axios from 'axios';

import bgImage from '../assets/images/join/join_bg.png';
import step01 from '../assets/images/join/step01.png';
import step02 from '../assets/images/join/step02.png';
import step03 from '../assets/images/join/step03.png';
import timeline from '../assets/images/join/timeline.png';
import timelineMobile from '../assets/images/join/timeline_mobile.png';

import '../assets/css/sass/join.scss';

const isMob = isMobile().phone;

const Join = ({ username = '', userid = '' }) => {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState('false');

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uploadWorks = () => {
    let formdata = new FormData();
    formdata.append('file', file[0]);

    // activityName: 'MICROSOFT_365',
    axios
      .post(
        '//cuep-sg.test.hihonor.com/abroad/shootMatch/uploadOriginImage',
        formdata
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box className='join-wrap'>
      <Box className='join-backgroud'>
        <Image
          aspectRatio={1440 / 1440}
          src={bgImage}
          style={{ backgroundColor: 'none' }}
        ></Image>
      </Box>
      <Box className='join-container' id='join'>
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
          <Grid className='steps-item' item xs>
            <Image
              aspectRatio={338 / 235}
              src={step01}
              style={{ backgroundColor: 'none' }}
            ></Image>
          </Grid>
          <Grid className='steps-item' item xs>
            <Image
              aspectRatio={338 / 235}
              src={step02}
              style={{ backgroundColor: 'none' }}
            ></Image>
          </Grid>
          <Grid className='steps-item' item xs>
            <Image
              aspectRatio={338 / 235}
              src={step03}
              style={{ backgroundColor: 'none' }}
            ></Image>
          </Grid>
        </Grid>
        <div className='timeline'>
          <Image
            aspectRatio={isMob ? 670 / 836 : 1440 / 294}
            src={isMob ? timelineMobile : timeline}
            style={{ backgroundColor: 'none' }}
          ></Image>
        </div>
        <Button variant='outlined' color='primary' onClick={handleClickOpen}>
          Open form dialog
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Join</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='* your work title'
            type='text'
            fullWidth
          />

          <Select
            labelId='demo-customized-select-label'
            id='demo-customized-select'
            value={age}
            onChange={handleChange}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <DropzoneArea
            maxFileSize={999999999}
            acceptedFiles={['image/*', 'video/mp4']}
            dropzoneText={'Drag and drop an image here or click'}
            onChange={(files) => setFile(files)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              console.log('Files:', file);
              uploadWorks();
            }}
            color='primary'
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Join;
