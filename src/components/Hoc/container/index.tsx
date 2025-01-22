import React, { useState, memo } from 'react';
import { Box } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Header from '../../header';
import SideBar from '../../sidebar';
import './container.scss';
import GlobalLoader from '../../globalLoader'

const openedMixin = (theme: Theme): CSSObject => ({
  // width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)})`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)})`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  // width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));
function Container() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <GlobalLoader/>
      <div className={`main_container ${!open ? 'collapse' : 'collapsed'}`}>
        <Header open={open} setOpen={setOpen} clname="af_login_header" />
        <Drawer variant="permanent" open={!open} className="menuBar" >
          <SideBar />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="rightContainer" style={{ marginTop : '-5%'}}>
            <Outlet />
          </div>
        </Box>
      </div>
    </Box>
  );
}

export default memo(Container);
