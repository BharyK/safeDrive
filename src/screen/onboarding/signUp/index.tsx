import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import {
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import NormalInput from '../../../components/inputs/normalInput';
import { phoneRegExp, emailRegExp } from '../../../constants';
import PasswordInput from '../../../components/inputs/passwordInput';
import NormalButton from '../../../components/buttons';
import './signUp.scss';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import Schema from '../../../schema';


function SignUp() {
  const [usernameError, setUserNameError] = useState('');

  const validateUserName = (val: any) => {
    if (!val) {
      setUserNameError(`${val} is required`);
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

  const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: '',
    contactNumber: '',
    company: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema.SignupSchema}
      enableReinitialize
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
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
                  name={'firstName'}
                  isRequired
                  isShrink
                  type={'text'}
                  focused={false}
                  inpImg={<PersonOutlineIcon />}
                  sizeval="medium"
                  maxLength={60}
                  label="First Name"
                  values={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.firstName && errors.firstName)}
                  touched={Boolean(touched.firstName)}
                  errors={Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <div className="lg_inp m-b-30">
                <NormalInput
                  className="onboarding-input"
                  name={'lastName'}
                  isRequired
                  isShrink
                  type={'text'}
                  focused={false}
                  inpImg={<PersonOutlineIcon />}
                  sizeval="medium"
                  maxLength={60}
                  label="Last Name"
                  values={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.lastName && errors.lastName)}
                  touched={Boolean(touched.lastName)}
                  errors={Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <div className="lg_inp m-b-30">
                <NormalInput
                  className="onboarding-input"
                  name={'userName'}
                  isRequired
                  isShrink
                  type={'text'}
                  focused={false}
                  inpImg={<PersonOutlineIcon />}
                  sizeval="medium"
                  maxLength={60}
                  label="User Name"
                  values={values.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.userName && errors.userName)}
                  touched={Boolean(touched.userName)}
                  errors={Boolean(errors.userName)}
                  helperText={touched.userName && errors.userName}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="lg_inp m-b-30">
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

            <Grid item xs={12} sm={12} md={12}>
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
              <div className="lg_inp m-b-30">
                <NormalInput
                  className="onboarding-input"
                  name={'contactNumber'}
                  isRequired
                  isShrink
                  type={'text'}
                  focused={false}
                  inpImg={<LocalPhoneIcon />}
                  sizeval="medium"
                  maxLength={60}
                  label="Contact Number"
                  values={values.contactNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.contactNumber && errors.contactNumber)}
                  helperText={touched.contactNumber && errors.contactNumber}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div className="lg_inp m-b-30">
                <NormalInput
                  className="onboarding-input"
                  name={'company'}
                  isRequired
                  isShrink
                  type={'text'}
                  focused={false}
                  inpImg={<StoreOutlinedIcon />}
                  sizeval="medium"
                  maxLength={60}
                  label="company"
                  values={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.company && errors.company)}
                  helperText={touched.company && errors.company}
                />
              </div>
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <NormalButton
              type="submit"
              variant="contained"
              className="btn-onboarding"
              disabled={
                !values.email ||
                (values.email && Boolean(usernameError)) ||
                !values.password ||
                !values.firstName ||
                !values.lastName ||
                !values.userName ||
                !values.contactNumber ||
                !values.company
              }
              buttonText="Sign Up"
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default SignUp;
