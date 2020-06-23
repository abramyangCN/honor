import React from 'react';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TermsCookies from '../utils/TermsCookies';
import Popup from 'reactjs-popup';
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
          <IconButton className='share-link'>
            <FontAwesomeIcon icon={faFacebookF} />
          </IconButton>{' '}
          <IconButton className='share-link'>
            <FontAwesomeIcon icon={faTwitter} />
          </IconButton>
          <IconButton className='share-link'>
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
          <IconButton className='share-link'>
            <FontAwesomeIcon icon={faYoutube} />
          </IconButton>
        </Box>
        <Grid className='copyrights' container>
          <Grid item xs='6'>
            <Typography className='copyright'>
              Copyright @Huawei Telecommunications (India) Co. Pvt. Ltd.
              2015-2018. All rights reserved.
            </Typography>
          </Grid>
          <Grid className='footer-links' item xs='6'>
            <Popup
              trigger={<Link className='footer-link'>Terms of use</Link>}
              modal
              closeOnDocumentClick
            >
              {(close) => (
                <div className='modal'>
                  <a className='close' onClick={close}>
                    &times;
                  </a>
                  <TermsCookies></TermsCookies>
                </div>
              )}
            </Popup>

            <Link className='footer-link' href='//google.com'>
              Privacy
            </Link>
            <Link className='footer-link' href='//google.com'>
              Statement
            </Link>
            <Popup
              trigger={<Link className='footer-link'>Cookies</Link>}
              modal
              closeOnDocumentClick
            >
              {(close) => (
                <div className='modal'>
                  <a className='close' onClick={close}>
                    &times;
                  </a>
                  <TermsCookies></TermsCookies>
                </div>
              )}
            </Popup>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
