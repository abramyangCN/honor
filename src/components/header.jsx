import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../assets/images/icons/logo.png';
import { ButtonBase, Button } from '@material-ui/core';
import '../assets/css/sass/header.scss';
import { Link as ScrollLink } from 'react-scroll';

import Popup from 'reactjs-popup';

import TermsCookies from '../utils/TermsCookies';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    display: 'block',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { data } = props;

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* {data.map(({ id, title, link }) => (
        <MenuItem key={id} onClick={handleMenuClose}>
          {title}
        </MenuItem>
      ))} */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* {data.filter((item) => {
        // const { id, title, link } = item;
        return item.id !== item.length - 1 ? (
          <MenuItem
            key={item.id}
            href={`#${item.link}`}
            onClick={handleMenuClose}
          >
            <p>{item.title}</p>
          </MenuItem>
        ) : null;
      })} */}
    </Menu>
  );

  return (
    <div className={`${classes.grow} nav-bar scroll-nav-header`}>
      <AppBar position='fixed' id='appBar'>
        <Toolbar>
          <ButtonBase
            className={'logo'}
            aria-label='show 4 new mails'
            color='inherit'
          >
            <img src={logo} alt='' />
          </ButtonBase>
          <div className={classes.grow}></div>
          <div className={`${classes.sectionDesktop} nav-links`}>
            {data.map(({ id, title, link, hrefLink }) => {
              if (link)
                return (
                  <ScrollLink
                    to={link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-150}
                    duration={400}
                    isDynamic={true}
                  >
                    <Button className={`nav-link`} key={id}>
                      <p>{title}</p>
                    </Button>
                  </ScrollLink>
                );
              if (hrefLink)
                return (
                  <Popup
                    trigger={
                      <Button className={`nav-link`} key={id}>
                        <p>{title}</p>
                      </Button>
                    }
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
                );
              return null;
            })}
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              className={`profile-button`}
              color='inherit'
            >
              {/* <AccountCircle /> */}
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
