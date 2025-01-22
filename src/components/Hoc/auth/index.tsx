import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './authContainer.scss';
import GlobalLoder from '../../globalLoader';
import { getAuthTokenFromLS } from '../../../utils';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LOGO } from '../../../constants';
import { BasicTabs } from '../../tabs';
import Login from '../../../screen/onboarding/login';
import SignUp from '../../../screen/onboarding/signUp';
import GlobalLoader from '../../globalLoader'

function AuthContainer() {
  const tabsContent = [
    {
      label: 'Login',
      id: 1,
      path: '',
    },
    {
      label: 'Sign up!',
      id: 2,
      path: '',
    },
  ];
  const customStyleForTabas = {
    width: '200px',
    border: '1px solid #1C222B',
    display: 'flex',
    justifyContent: 'center',
  };
  const custom2ndTabs = {
    width : '55%',
    margin: 'auto',
  }

  return (
    <>
    <div className="onboarding_wrappers">
      <h3>Welcome to Sierra Circuits</h3>
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <BasicTabs
          customStyleForTabas={customStyleForTabas}
          tabsContent={tabsContent}
          // width = "100%"
          label="it's quick and easy"
          childrenOne={<Login />}
          childrenTwo = {<SignUp/>}
          secondTabStyle = {custom2ndTabs}
        />
      </Box>
    </div>
   </>
  );
}

export default AuthContainer;
