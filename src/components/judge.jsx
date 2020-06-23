import React from 'react';
import Box from '@material-ui/core/Box';
import Image from 'material-ui-image';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import isMobile from 'ismobilejs';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import TitleBullets from '../utils/TitleBullets';

import bgImage from '../assets/images/judge/judge_bg.png';
import avatar01 from '../assets/images/judge/Monsieur.png';
import avatar02 from '../assets/images/judge/Sebastiano.png';
import avatar03 from '../assets/images/judge/Rubens.png';

import '../assets/css/sass/judge.scss';

const judges = [
  {
    name: 'Monsieur GRrr',
    description:
      'French tech content creator. He publishes many videos on his YouTube channel presenting new products. But he also talks about our uses and advises us in our technological purchases.',
    avatar: avatar01,
  },
  {
    name: 'Sebastiano Boni',
    description: 'Head of User Experience Milan Aesthetic Research Center',
    avatar: avatar02,
  },
  {
    name: 'Rubens Cantuni',
    description: 'UX Design Manager – Milan Aesthetic Research Center',
    avatar: avatar03,
  },
];

const Judge = (props) => {
  const params = {
    navigation: {
      nextEl: '.avatar-next',
      prevEl: '.avatar-prev',
    },
    slidesPerView: 'auto',

    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 0,
    slideToClickedSlide: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
  };

  return (
    <Box className='judge-wrap'>
      <Box className='judge-backgroud'>
        <Image
          aspectRatio={1440 / 761}
          src={bgImage}
          style={{ backgroundColor: 'none' }}
        ></Image>
      </Box>
      <Box className='judge-container' id='judge'>
        <Typography variant='h2' className='title'>
          Our Judges
        </Typography>
        <TitleBullets />
        <Swiper {...params}>
          {judges.map(({ name, description, avatar }) => (
            <div key={name}>
              <div className='swiper-card-container'>
                <div className='swiper-card-inner'>
                  <div className='avatar-container'>
                    <div
                      className='swiper-button-prev avatar-prev'
                      tabIndex='0'
                      role='button'
                      aria-label='Previous slide'
                    ></div>
                    <Avatar alt={name} src={avatar} className='avatar-large' />
                    <div
                      className='swiper-button-next  avatar-next'
                      tabIndex='0'
                      role='button'
                      aria-label='Next slide'
                    ></div>
                  </div>
                  <Card className='card-container'>
                    <CardContent className='card-content'>
                      <Typography variant='h3'>{name}</Typography>
                      <Typography variant='h5'>{description}</Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Judge;
