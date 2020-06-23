import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import '../assets/css/sass/footer.scss';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <Box className='footer-container'>
        <Box className='share-container'>
          <IconButton
            className='share-link'
            href='//www.facebook.com/honorglobal'
            target='_blank'
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </IconButton>
          <IconButton
            className='share-link'
            href='//www.twitter.com/Honorglobal'
            target='_blank'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </IconButton>
          <IconButton
            className='share-link'
            href='//www.instagram.com/honorglobal'
            target='_blank'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
          <IconButton
            className='share-link'
            href='//www.youtube.com/c/HonorOfficial'
            target='_blank'
          >
            <FontAwesomeIcon icon={faYoutube} />
          </IconButton>
        </Box>
        <Grid className='copyrights' container>
          <Grid item xs='6'>
            <Typography className='copyright'>
              <div class='copyright'>
                Copyright ©2020 Huawei Device Co., Ltd.
                <Link
                  target='_blank'
                  href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44190002004111'
                >
                  <img src='https://www.hihonor.com/content/dam/honor/common/social-icons/ghs.png' />
                  <span>粤公网安备 44190002004111号 </span>
                </Link>
                <Link target='_blank' href='http://www.beian.miit.gov.cn'>
                  <span> 粤ICP备19015064号</span>
                </Link>
              </div>
            </Typography>
          </Grid>
          <Grid className='footer-links' item xs='6'>
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
