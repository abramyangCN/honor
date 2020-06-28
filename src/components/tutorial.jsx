import React from 'react';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import Swiper from 'react-id-swiper';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import TitleBullets from '../utils/TitleBullets';

import video01 from '../assets/images/stillonoir_magicbook_process-video_music.mp4';

import 'swiper/css/swiper.css';

import '../assets/css/sass/tutorial.scss';

import bgImage from '../assets/images/judge/judge_bg.png';
import avatar01 from '../assets/images/judge/Monsieur.png';
import avatar02 from '../assets/images/judge/Sebastiano.png';
import avatar03 from '../assets/images/judge/Rubens.png';

const judges = [
  {
    name: 'Monsieur GRrr',
    description:
      'French tech content creator. He publishes many videos on his YouTube channel presenting new products. But he also talks about our uses and advises us in our technological purchases.',
    avatar: avatar01,
    videoPath: video01,
  },
];

const Tutorial = (props) => {
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
    watchOverflow: true,
  };

  return (
    <Box className='tutorial-wrap'>
      <Box className='tutorial-container' id='tutorial'>
        <Typography variant='h2' className='title'>
          Tutorial Video
        </Typography>
        <TitleBullets />
        <Swiper {...params}>
          {judges.map(({ name, description, videoPath }) => (
            <div key={name}>
              <div className='swiper-card-container'>
                <div className='swiper-card-inner'>
                  <Card className='card-container'>
                    <CardContent className='card-video-thumb'>
                      <video src={`${videoPath}#t=0,1`}></video>
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
                    {/* <CardContent className='card-content'>
                      <Typography variant='h3'>{name}</Typography>
                      <Typography variant='h5'>{description}</Typography>
                    </CardContent> */}
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

export default Tutorial;
