import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  ClickAwayListener,
  Button,
  Typography,
  MenuItem,
  Menu,
  Stack,
  Divider,
} from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NormalButton from '../buttons';
import Notification from '../notification';
import { LOGO, MENUARROW, NOTIFICATION } from '../../constants';
import './header.scss';
import JoinRightOutlinedIcon from '@mui/icons-material/JoinRightOutlined';
import JoinLeftOutlinedIcon from '@mui/icons-material/JoinLeftOutlined';
import { useDispatch, useSelector } from 'react-redux';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { RootState } from '../../Redux/store';
import { darkModeActive } from '../../Redux/slice/DarkModeReducer';

interface Props {
  open?: boolean;
  setOpen?: Function;
  clname: string;
}

export default function Header({ open, setOpen, clname }: Props) {
  const Navigate = useNavigate();
  const [openState, setNotificationState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const drpopen = Boolean(anchorEl);
  const [notopen, setOpennot] = React.useState(false);
  const { darkMode } = useSelector((state: RootState) => state.darkModeReducer);
  const dispatch = useDispatch();

  const handleClickAway = () => {
    setOpennot(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    document.body.classList.add('inherit-scroller');
  };

  const handleLogout = () => {
    console.log('Bharath');
  };

  const handleClearNotification = () => {
    console.log('asdf');
  };

  const handleClose = () => {
    setAnchorEl(null);
    document.body.classList.remove('inherit-scroller');
  };

  const handlemenuIcon = () => {
    if (setOpen) setOpen(!open);
  };

  const handleDarkMode = () => {
    dispatch(darkModeActive(!darkMode))
  }

  const theme = useTheme();

  return (
    <header className={clname}>
      <div className="lt">
        
        <Box className="lg_wrap" style = {{background: darkMode ? 'balck' : '#ebe9e9'}}>
        <h4>Dashboard</h4>
          <Box className="ar_nv" onClick={handlemenuIcon}>
            <img src={MENUARROW} alt="sierra" className="lab" />
          </Box>
        </Box>
      </div>

      <div className="rt" style = {{background: darkMode ? 'black' : '#ebe9e9'}}>
        <div className="header_user_del">
          <div className="notification_wrapper">
        
            <Stack direction="row" spacing={2} >
              {darkMode ?  <div title='enable dark mode' onClick={handleDarkMode}><Brightness4Icon style={{fontSize: '40px'}}/></div> : 
                <div title='disable dark mode' onClick={handleDarkMode}><Brightness7Icon style={{fontSize: '40px'}}/></div>
              }
            
              <Divider orientation="vertical" flexItem style={{ background: 'yellow'}}/>
              <div>Help</div>
              <Divider orientation="vertical" flexItem style={{ background: 'yellow'}}/>
              <div>FAQs</div>
            </Stack>
          </div>
        </div>
      </div>
    </header>
  );
}

