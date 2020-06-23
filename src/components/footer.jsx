import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import honorClub from '../assets/images/icons/honor_club.png';

import '../assets/css/sass/footer.scss';
import isMobileJs from 'ismobilejs';

const isMobile = isMobileJs().phone;

const Footer = (props) => {
  return (
    <footer className='footer'>
      <Box className='footer-container'>
        <Box className='share-container'>
          <Button
            className='share-link'
            href='//www.facebook.com/honorglobal'
            target='_blank'
            size='large'
            startIcon={<FontAwesomeIcon size='lg' icon={faFacebookF} />}
          >
            @honorglobal 
          </Button>

          <Button
            className='share-link'
            href='//www.twitter.com/Honorglobal'
            target='_blank'
            size='large'
            startIcon={<FontAwesomeIcon icon={faTwitter} />}
          >
            @Honorglobal
          </Button>
          <Button
            className='share-link'
            href='//www.instagram.com/honorglobal'
            target='_blank'
            size='large'
            startIcon={<FontAwesomeIcon icon={faInstagram} />}
          >
            honorglobal
          </Button>
          <Button
            className='share-link'
            href='//www.youtube.com/c/HonorOfficial'
            target='_blank'
            size='large'
            startIcon={<FontAwesomeIcon icon={faYoutube} />}
          >
            HONOR
          </Button>

          <Button
            className='share-link'
            href='//club.hihonor.com/global/magicook-14/541/forums.htm'
            target='_blank'
          >
            <img className='honor-club' src={honorClub} alt='' />
          </Button>
        </Box>

        <Grid className='copyrights' container>
          <Grid className='copyright-item' item xs={6}>
            <Typography noWrap className='copyright'>
              Copyright ©2020 Huawei Device Co., Ltd.
              <Link
                target='_blank'
                href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44190002004111'
              >
                <span
                  style={
                    isMobile
                      ? { display: 'block', lineHeight: 0 }
                      : { display: 'none' }
                  }
                >
                  <br />
                </span>
                <img src='https://www.hihonor.com/content/dam/honor/common/social-icons/ghs.png' />
                <span>粤公网安备 44190002004111号 </span>
              </Link>
              <span
                style={
                  isMobile
                    ? { display: 'block', lineHeight: 0 }
                    : { display: 'none' }
                }
              >
                <br />
              </span>
              <Link target='_blank' href='http://www.beian.miit.gov.cn'>
                <span> 粤ICP备19015064号</span>
              </Link>
            </Typography>
          </Grid>
          <Grid className='footer-links copyright-item' item xs={6}>
            <Link
              className='footer-link'
              href='//www.hihonor.com/global/terms-of-use/'
            >
              Terms Of Use
            </Link>
            <Link
              className='footer-link'
              href='//www.hihonor.com/global/privacy-policy/'
            >
              Privacy
            </Link>
            <Link
              className='footer-link'
              href='//www.hihonor.com/global/cookie-statement/'
            >
              Cookies
            </Link>

            <Link
              className='footer-link'
              href='//www.hihonor.com/global/legal/privacy-questions/worldwide/'
            >
              Legal
            </Link>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
