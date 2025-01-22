import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../Redux/store';
import { updateGlobalLoader } from '../../../Redux/slice/GloalLoaderReducer';

import {
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AuthContainer from '../../../components/Hoc/auth';
import NormalInput from '../../../components/inputs/normalInput';
import PasswordInput from '../../../components/inputs/passwordInput';
import {
  AUTHING,
  emailIMG,
  GoogleIMG,
  phoneRegExp,
  emailRegExp,
} from '../../../constants';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import NormalButton from '../../../components/buttons';
import Schema from '../../../schema';

import { Formik, Form } from 'formik';
import './login.scss';
import RoutesPaths, { routeConstant } from '../../../routes/RouteConstant';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { sliceAunticationRequest } from '../../../Redux/slice/AuthReducer';
import { Alert } from '../../../utils';
import axios from 'axios';

function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authReducer);

  const [username, setEmail]: any = useState('');
  const [password, setPassword]: any = useState('');
  const [rememberMe, setrememberMe]: any = useState(false);
  const [usernameError, setUserNameError] = useState('');
  const navigate = useNavigate();
  
  const initialValues = {
    email: username,
    password: password,
    rememberMe: rememberMe,
  };

  const validateUserName = (val: any) => {
    if (!val) {
      setUserNameError('Email/Mobile Number is required');
      return;
    }

    if (!(val.match(phoneRegExp) || val.match(emailRegExp))) {
      setUserNameError('Please enter valid Email/Mobile Number');
      return;
    }
    if (val.match(phoneRegExp) || val.match(emailRegExp)) {
      setUserNameError('');
      return;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={Schema.LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        
        dispatch(sliceAunticationRequest(
          {
            username : 'joycie',
            password : "joycie"
          }
        ));

        navigate('/dashboard');
        // {
        //   username : 'joycie',
        //   password : "joycie"
        // }
        //navigate('/dashboard');
        // dispatch(
        //   login(
        //     values,
        //     Navigate,
        //     () => {
        //       if (values.rememberMe) {
        //         sessionStorage.setItem("email", values.email);
        //         sessionStorage.setItem("password", values.password);
        //         sessionStorage.setItem(
        //           "rememberMe",
        //           `${values.rememberMe}`
        //         );
        //       } else {
        //         sessionStorage.removeItem("password");
        //         sessionStorage.removeItem("rememberMe");
        //       }
        //     },
        //     "/dashboard",
        //     setSubmitting,
        //     true
        //   )
        // );
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
        setFieldValue,
        isValid,
        dirty,
      }) => (
        <Form>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={6} md={6}>
              <div className="lg_inp m-b-30">
                <NormalInput
                  className="onboarding-input"
                  name={'email'}
                  isRequired
                  isShrink
                  type={'text'}
                  focused={false}
                  inpImg={<MailOutlineIcon />}
                  sizeval="medium"
                  maxLength={60}
                  label="Email/Mobile Number"
                  values={values.email}
                  onChange={(e: any) => {
                    setFieldValue('email', e.target.value);
                    validateUserName(e.target.value);
                  }}
                  onBlur={() => validateUserName(values.email)}
                  error={Boolean(usernameError)}
                  touched={Boolean(usernameError)}
                  helperText={usernameError}
                  
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="lg_inp m-b-0">
                <PasswordInput
                  className="onboarding-input"
                  type="password"
                  label="Password"
                  id="password"
                  isRequired
                  focused={false}
                  maxLength={60}
                  sizeval="medium"
                  values={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  
                />
              </div>
            </Grid>
          </Grid>
          <Link
            to={'RoutesPaths.routeConstants.forgotPassword'}
            className="text_nav themeBlack"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px',
              marginTop: '20px',
            }}
          >
            Forgot Password?
          </Link>
          <Typography
            component="p"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            Not a Member? Create an Account.
          </Typography>
          {/* <div className="Dflex al-cnt sp-bt p-t-25 p-b-35">
            <div className="lg_inp checkbox">
              <FormControlLabel
                name="rememberMe"
                control={
                  <Checkbox
                    color="primary"
                    onChange={handleChange}
                    name="rememberMe"
                    checked={values.rememberMe}
                    inputProps={{
                      'aria-label': 'rememberMe',
                    }}
                  />
                }
                label={'Remember me'}
                labelPlacement="end"
              />
            </div>
          
          </div> */}
          <NormalButton
            type="submit"
            variant="contained"
            className="btn-onboarding"
            disabled={
              !values.email ||
              (values.email && Boolean(usernameError)) ||
              !values.password
            }
            buttonText="Sign In"
          />
        </Form>
      )}
    </Formik>
  );
}

export default Login;
