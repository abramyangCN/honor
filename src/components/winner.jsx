import React from 'react';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import Swiper from 'react-id-swiper';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import HonorBadge from '../utils/HonorBadge';

import TitleBullets from '../utils/TitleBullets';

import 'swiper/css/swiper.css';

import '../assets/css/sass/winner.scss';

import avatar01 from '../assets/images/judge/Monsieur.png';
import avatar02 from '../assets/images/judge/Sebastiano.png';
import avatar03 from '../assets/images/judge/Rubens.png';

import winner11 from '../assets/images/winner/11.png';
import winner12 from '../assets/images/winner/12.png';
import winner21 from '../assets/images/winner/21.png';
import winner22 from '../assets/images/winner/22.png';
import winner23 from '../assets/images/winner/23.png';
import winner31 from '../assets/images/winner/31.png';
import winner32 from '../assets/images/winner/32.png';
import winner33 from '../assets/images/winner/33.png';
import winner34 from '../assets/images/winner/34.png';
import winner35 from '../assets/images/winner/35.png';

const winners = {
  first: [
    {
      name: 'rubynasre****@gmail.com',
      description: 'My future art',
      avatar: avatar01,
      imgPath: winner11,
      isLandscape: false,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
    {
      name: '+91 783*****14',
      description: 'Future Design',
      avatar: avatar02,
      imgPath: winner12,
      isLandscape: false,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4#t=1,2',
    },
  ],
  second: [
    {
      name: 'Aaidia Attou',
      description: 'High tech',
      avatar: avatar01,
      imgPath: winner21,
      isLandscape: true,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
    {
      name: 'Flocoloco',
      description: ' A glance into future activities through Honor windows.',
      avatar: avatar02,
      imgPath: winner22,
      isLandscape: false,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4#t=1,2',
    },
    {
      name: 'Noha hesham',
      description: 'Space window',
      avatar: avatar03,
      imgPath: winner23,
      isLandscape: false,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
  ],
  third: [
    {
      name: 'sunlov****@yandex.com',
      description:
        'The single biggest problem in communication is the illusion that it has taken place.',
      avatar: avatar01,
      imgPath: winner31,
      isLandscape: true,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
    {
      name: 'ferozkhan.****@rediffmail.com',
      description: 'The past is always tense, the future perfect.',
      avatar: avatar02,
      imgPath: winner32,
      isLandscape: false,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4#t=1,2',
    },
    {
      name: 'Sumathi G',
      description: 'A satellite has no conscience',
      avatar: avatar03,
      imgPath: winner33,
      isLandscape: false,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
    {
      name: 'Nada Mohsen',
      description: 'Thanks To Doctors',
      avatar: avatar03,
      imgPath: winner34,
      isLandscape: true,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
    {
      name: 'Salih Harmancı',
      description: 'Tempo',
      avatar: avatar03,
      imgPath: winner35,
      isLandscape: false,
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
  ],
};

const Winner = (props) => {
  const [popupVideoPath, setPoupVideoPath] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const params = {
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: false,
    spaceBetween: 0,
    slideToClickedSlide: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
  };

  const firstParams = {
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: false,
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
  };

  return (
    <Box className='winner-wrap'>
      <Box className='winner-container' id='winner'>
        <Typography variant='h2' className='title'>
          Winners
        </Typography>
        <TitleBullets />

        <HonorBadge className='winner-badge' order={1} />

        <Swiper containerClass='first-swiper swiper-container' {...firstParams}>
          {winners.first.map(({ name, description, videoPath, imgPath }) => (
            <div key={name}>
              <div className='swiper-card-container'>
                <div className='swiper-card-inner'>
                  <Card className='card-container'>
                    <CardContent className='card-video-thumb'>
                      <img src={imgPath} alt=''></img>
                    </CardContent>
                    <CardContent className='card-content'>
                      <Grid
                        className='winner-name'
                        container
                        alignItems='center'
                      >
                        <Grid item>
                          <Avatar></Avatar>
                        </Grid>
                        <Grid item>
                          <Typography variant='h3'>{name}</Typography>
                        </Grid>
                      </Grid>
                      <Divider />
                      <Typography className='winner-description' variant='h5'>
                        {description}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </Swiper>

        <HonorBadge order={2} />
        <Swiper {...params}>
          {winners.second.map(
            ({ name, description, videoPath, isLandscape, imgPath }) => (
              <div key={name}>
                <div className='swiper-card-container'>
                  <div className='swiper-card-inner'>
                    <Card className='card-container'>
                      <CardContent className='card-video-thumb'>
                        <img
                          src={imgPath}
                          className={isLandscape ? 'width-100' : ''}
                          alt=''
                        ></img>
                      </CardContent>
                      <CardContent className='card-content'>
                        <Grid
                          className='winner-name'
                          container
                          alignItems='center'
                        >
                          <Grid item>
                            <Avatar></Avatar>
                          </Grid>
                          <Grid item>
                            <Typography variant='h3'>{name}</Typography>
                          </Grid>
                        </Grid>
                        <Divider />
                        <Typography className='winner-description' variant='h5'>
                          {description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )
          )}
        </Swiper>
        <HonorBadge className='winner-badge' order={3} />

        <Swiper {...params}>
          {winners.third.map(
            ({ name, description, videoPath, isLandscape, imgPath }) => (
              <div key={name}>
                <div className='swiper-card-container'>
                  <div className='swiper-card-inner'>
                    <Card className='card-container'>
                      <CardContent className='card-video-thumb'>
                        <img
                          src={imgPath}
                          className={isLandscape ? 'width-100' : ''}
                          alt=''
                        ></img>
                      </CardContent>
                      <CardContent className='card-content'>
                        <Grid
                          className='winner-name'
                          container
                          alignItems='center'
                        >
                          <Grid item>
                            <Avatar></Avatar>
                          </Grid>
                          <Grid item>
                            <Typography variant='h3'>{name}</Typography>
                          </Grid>
                        </Grid>
                        <Divider />
                        <Typography className='winner-description' variant='h5'>
                          {description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )
          )}
        </Swiper>

        <Dialog className='video-popup' open={open} onClose={handleClose}>
          <DialogContent>
            <video src={popupVideoPath} autoPlay controls></video>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Winner;
