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

import bgImage from '../assets/images/judge/judge_bg.png';
import avatar01 from '../assets/images/judge/Monsieur.png';
import avatar02 from '../assets/images/judge/Sebastiano.png';
import avatar03 from '../assets/images/judge/Rubens.png';

const winners = {
  first: [
    {
      name: 'Monsieur GRrr',
      description:
        'French tech content creator. He publishes many videos on his YouTube channel presenting new products. But he also talks about our uses and advises us in our technological purchases.',
      avatar: avatar01,
      imgPath:
        'https://www.hihonor.com/content/dam/honor/gallery/zh/home/home-gallery-banner-0508-pc.jpg',
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
    {
      name: 'Sebastiano Boni',
      description: 'Head of User Experience Milan Aesthetic Research Center',
      avatar: avatar02,
      imgPath:
        'https://www.hihonor.com/content/dam/honor/gallery/zh/home/home-gallery-banner-0508-pc.jpg',
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4#t=1,2',
    },
  ],
  second: [
    {
      name: 'Monsieur GRrr',
      description:
        'French tech content creator. He publishes many videos on his YouTube channel presenting new products. But he also talks about our uses and advises us in our technological purchases.',
      avatar: avatar01,
      imgPath:
        'https://www.hihonor.com/content/dam/honor/gallery/zh/home/home-gallery-banner-0508-pc.jpg',
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
    {
      name: 'Sebastiano Boni',
      description: 'Head of User Experience Milan Aesthetic Research Center',
      avatar: avatar02,
      imgPath:
        'https://www.hihonor.com/content/dam/honor/gallery/zh/home/home-gallery-banner-0508-pc.jpg',
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4#t=1,2',
    },
    {
      name: 'Rubens Cantuni',
      description: 'UX Design Manager – Milan Aesthetic Research Center',
      avatar: avatar03,
      imgPath:
        'https://www.hihonor.com/content/dam/honor/gallery/zh/home/home-gallery-banner-0508-pc.jpg',
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
  ],
  third: [
    {
      name: 'Monsieur GRrr',
      description:
        'French tech content creator. He publishes many videos on his YouTube channel presenting new products. But he also talks about our uses and advises us in our technological purchases.',
      avatar: avatar01,
      imgPath:
        'https://www.hihonor.com/content/dam/honor/gallery/zh/home/home-gallery-banner-0508-pc.jpg',
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4',
    },
    {
      name: 'Sebastiano Boni',
      description: 'Head of User Experience Milan Aesthetic Research Center',
      avatar: avatar02,
      imgPath:
        'https://www.hihonor.com/content/dam/honor/gallery/zh/home/home-gallery-banner-0508-pc.jpg',
      videoPath:
        'https://www.hihonor.com/content/dam/honor/common/new-brand/home-video-pc.mp4#t=1,2',
    },
    {
      name: 'Rubens Cantuni',
      description: 'UX Design Manager – Milan Aesthetic Research Center',
      avatar: avatar03,
      imgPath:
        'https://www.hihonor.com/content/dam/honor/gallery/zh/home/home-gallery-banner-0508-pc.jpg',
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
                      <IconButton
                        onClick={() => {
                          setPoupVideoPath(videoPath);
                          handleClickOpen();
                        }}
                        className='video-play-button'
                      >
                        <PlayArrowIcon />
                      </IconButton>
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
          {winners.second.map(({ name, description, videoPath, imgPath }) => (
            <div key={name}>
              <div className='swiper-card-container'>
                <div className='swiper-card-inner'>
                  <Card className='card-container'>
                    <CardContent className='card-video-thumb'>
                      <img src={imgPath} alt=''></img>
                      <IconButton
                        onClick={() => {
                          setPoupVideoPath(videoPath);
                          handleClickOpen();
                        }}
                        className='video-play-button'
                      >
                        <PlayArrowIcon />
                      </IconButton>
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
        <HonorBadge className='winner-badge' order={3} />

        <Swiper {...params}>
          {winners.third.map(({ name, description, videoPath, imgPath }) => (
            <div key={name}>
              <div className='swiper-card-container'>
                <div className='swiper-card-inner'>
                  <Card className='card-container'>
                    <CardContent className='card-video-thumb'>
                      <img src={imgPath} alt=''></img>
                      <IconButton
                        onClick={() => {
                          setPoupVideoPath(videoPath);
                          handleClickOpen();
                        }}
                        className='video-play-button'
                      >
                        <PlayArrowIcon />
                      </IconButton>
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
