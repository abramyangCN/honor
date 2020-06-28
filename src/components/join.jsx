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
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DropzoneArea } from 'material-ui-dropzone';
import { AttachFile } from '@material-ui/icons';
import TitleBullets from '../utils/TitleBullets';
import axios from 'axios';
import $ from 'jquery';
import qs from 'qs';

import { loginBtn, apiHost, HONOROBSSDK } from '../plugin/login';

import bgImage from '../assets/images/join/join_bg.png';
import step01 from '../assets/images/join/step01.png';
import step02 from '../assets/images/join/step02.png';
import step03 from '../assets/images/join/step03.png';
import timeline from '../assets/images/join/timeline.png';
import timelineMobile from '../assets/images/join/timeline_mobile.png';

import '../assets/css/sass/join.scss';

const isMob = isMobile().phone;

const Join = ({ isLogin, countryList }) => {
  const [open, setOpen] = React.useState(false);
  const [uploadSuccessful, setUploadSuccessful] = React.useState(1);
  const [uploadResult, setUploadResult] = React.useState(false);

  const [file, setFile] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);

  const [workTitle, setWorkTitle] = React.useState('');

  const [country, setCountry] = React.useState('0');

  const [workType, setWorkType] = React.useState('photo');
  const [workTitleError, setWorkTitleError] = React.useState(false);
  const [countryError, setCountryError] = React.useState(false);
  const [fileError, setFileError] = React.useState(false);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleWorkTitleChange = (event) => {
    setWorkTitle(event.target.value);
  };

  const handleTypeChange = (event) => {
    setWorkType(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
    setUploadResult(false);
  };

  const uploadWorks = () => {
    setWorkTitleError(false);
    setCountryError(false);
    setFileError(false);

    if (workTitle === '') {
      setWorkTitleError(true);
      return;
    }

    if (country === '0') {
      setCountryError(true);
      return;
    }

    console.log(file.length);

    if (file.length === 0) {
      setFileError(true);
      console.log(fileError);
      return;
    }

    setIsUploading(true);
    let formdata = null;
    formdata = new FormData();
    formdata.append('imgContent', workTitle);
    formdata.append('userCountries', country);
    formdata.append('imgCountries', 'gallery');
    formdata.append('activityName', 'MICROSOFT_365');

    axios.defaults.withCredentials = true;
    axios.defaults.crossDomain = true;

    if (workType === 'photo') {
      formdata.append('file', file[0]);
      console.log(formdata);

      console.log('this is a image');
      axios
        .post(`//${apiHost}/abroad/shootMatch/uploadOriginImage`, formdata)
        .then(function (response) {
          console.log(response);
          handleClose();
          setUploadSuccessful(1);

          if (response.data.code === '400') {
            setUploadSuccessful(0);
          }
          if (response.data.code === '100007') {
            setUploadSuccessful(2);
          }
          setIsUploading(false);
          setCountry('0');
          setWorkTitle('');
          setWorkType('photo');
          setUploadResult(true);
          formdata = null;
        })
        .catch(function (error) {
          console.log(error);
          setUploadSuccessful(0);
          handleClose();
          setUploadResult(true);
          setIsUploading(false);
          formdata = null;
        });
    } else {
      console.log('this is a video');

      let fileData = new File([file[0]], new Date().getTime() + file[0].name, {
        type: file[0].type,
      });

      let fileName = fileData.name;

      HONOROBSSDK.init(
        `//${apiHost}`,
        `https://obs.cn-north-1.myhuaweicloud.com`
      );
      HONOROBSSDK.uploadFile(
        fileName,
        fileData,
        function () {
          console.log('sdk complete');
          //success，obs视频上传成功，继续进行cuep上传

          let objURL = URL.createObjectURL(fileData);
          $('#currVideo').attr('src', objURL);
          let currVideo = $('#currVideo')[0];
          $('#videoPreview').show();
          currVideo.addEventListener('loadeddata', function () {
            window.videoloadeddata = new Date().getTime();
            // 获取首帧图片，因视频加载有延迟，故增加了一个0.3s延时

            let promiseImg = new Promise((resolve, reject) => {
              setTimeout(function () {
                let canvas = document.createElement('canvas');
                // 首帧图片质量比例，默认1，大小区间  0.01-1
                let scale = $('#videoPreview').data('ratio') || '1';
                canvas.width = currVideo.videoWidth * scale;
                canvas.height = currVideo.videoHeight * scale;
                canvas
                  .getContext('2d')
                  .drawImage(currVideo, 0, 0, canvas.width, canvas.height);
                let imgsrc = canvas.toDataURL('image/png');
                $('#videoPreviewImg').attr('src', imgsrc);
                resolve({ fileName, imgsrc });
                $('#videoPreview').hide();
              }, 300);
            });

            promiseImg.then(({ fileName, imgsrc }) => {
              console.log(`generating ${fileName} and ${imgsrc} `);

              let formdataVideo = {
                imgContent: workTitle,
                userCountries: country,
                imgCountries: 'gallery',
                activityName: 'MICROSOFT_365',
                imageNames: fileName,
                coverPicture: imgsrc,
              };

              formdata.append('imageNames', fileName);
              formdata.append('coverPicture', imgsrc);

              const headers = {
                'Content-Type':
                  'application/x-www-form-urlencoded;charset=UTF-8',
              };

              axios
                .post(
                  `//${apiHost}/abroad/shootMatch/submitObsVideo`,
                  qs.stringify(formdataVideo),
                  headers
                )
                .then(function (response) {
                  console.log(response);

                  setUploadSuccessful(1);

                  if (response.data.code === '400') {
                    setUploadSuccessful(0);
                    HONOROBSSDK.deleteFile(fileName);
                  }
                  if (response.data.code === '100007') {
                    setUploadSuccessful(2);
                    HONOROBSSDK.deleteFile(fileName);
                  }
                  handleClose();
                  setIsUploading(false);
                  setCountry('0');
                  setWorkTitle('');
                  setWorkType('photo');
                  setUploadResult(true);
                  formdata = null;
                })
                .catch(function (error) {
                  HONOROBSSDK.deleteFile(fileName);
                  console.log(error);
                  setUploadSuccessful(0);
                  handleClose();
                  setCountry('0');
                  setWorkTitle('');
                  setWorkType('photo');
                  setUploadResult(true);
                  setIsUploading(false);
                  formdata = null;
                });
            });
          });
        },
        function () {
          //fail，obs视频上传失败，提示稍后重试
          setUploadSuccessful(0);
          setUploadResult(true);
          setIsUploading(false);
          setCountry('0');
          setWorkTitle('');
          setWorkType('photo');
          handleClose();
          formdata = null;
        }
      );
    }
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
        <Button
          variant='outlined'
          className='join-button'
          onClick={() => {
            isLogin && handleClickOpen();
            !isLogin && loginBtn();
          }}
        >
          {!isLogin ? `Login to Join` : `Join Now`}
        </Button>

        <div id='videoPreview' className='preview-box' data-ratio='0.1'>
          <input
            type='hidden'
            id='videoImg'
            name='coverPicture'
            value=''
          ></input>
          <img id='videoPreviewImg' className='hidden' src='' alt=''></img>
          <video id='currVideo' src='' controls='controls'></video>
        </div>
      </Box>

      <Dialog
        className='upload-dialog'
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle className='title' id='form-dialog-title'>
          Join
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='workTitle'
            type='text'
            label='* Your work title'
            error={workTitleError}
            className='input-text'
            fullWidth
            onChange={handleWorkTitleChange}
          />

          <Select
            labelId='demo-customized-select-label'
            id='demo-customized-select'
            value={country}
            error={countryError}
            className='input-item'
            fullWidth
            onChange={handleChange}
          >
            <MenuItem value='0'>* Please select your country/region</MenuItem>

            {countryList &&
              countryList.map(({ value, nodeName }) => (
                <MenuItem key={value} value={value}>
                  {nodeName}
                </MenuItem>
              ))}
          </Select>

          <Select
            labelId='demo-customized-select-label'
            id='demo-customized-select'
            value={workType}
            className='input-item'
            fullWidth
            onChange={handleTypeChange}
          >
            <MenuItem value={'photo'}>Photo</MenuItem>
            <MenuItem value={'video'}>Video</MenuItem>
          </Select>
          {/* 
          <DropzoneArea
              maxFileSize={workType === 'photo' ? 20971520 : 209715200}
              filesLimit={1}
              acceptedFiles={workType === 'photo' ? ['image/*'] : ['video/mp4']}
              dropzoneText={'Drag and drop an image here or click'}
              onChange={(files) => {
                console.log('file changed');
                setFile(files);
              }}
            /> */}
          {workType === 'photo' && (
            <DropzoneArea
              maxFileSize={20971520}
              dropzoneClass={
                fileError
                  ? `upload-dropzone upload-dropzone-error`
                  : `upload-dropzone`
              }
              filesLimit={1}
              acceptedFiles={['image/*']}
              dropzoneText={
                'Please add a photo(JPG/PNG) of max. 20MB, or a video(MP4) of max. 200MB.'
              }
              onChange={(files) => {
                console.log('file changed');
                setFile(files);
              }}
            />
          )}

          {workType === 'video' && (
            <DropzoneArea
              maxFileSize={209715200}
              filesLimit={1}
              dropzoneClass={
                fileError
                  ? `upload-dropzone upload-dropzone-error`
                  : `upload-dropzone`
              }
              acceptedFiles={['video/mp4']}
              dropzoneText={
                'Please add a photo(JPG/PNG) of max. 20MB, or a video(MP4) of max. 200MB.'
              }
              onChange={(files) => {
                console.log('file changed');
                setFile(files);
              }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button
            disabled={isUploading ? true : false}
            onClick={() => {
              console.log('Files:', file);
              uploadWorks();
            }}
            color='primary'
            size='large'
          >
            {isUploading ? 'Uploading...' : 'Submit Your work'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={uploadResult}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {uploadSuccessful === 1
              ? `Your work has been successfully
            uploaded.`
              : ''}
            {uploadSuccessful === 2 ? `Please Login` : ''}
            {uploadSuccessful === 0
              ? `Upload failed, please try again later`
              : ''}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Join;
