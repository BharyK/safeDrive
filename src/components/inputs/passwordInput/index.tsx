import React, { useState } from "react";
import { InputAdornment, TextField, Tooltip } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {
  passwordShowIMG,
  passwordHideIMG,
  passwordIMG,
} from "../../../constants";
import PasswordChecklist from "react-password-checklist";
import "./passwordInput.scss";
import "../input.scss";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Button, IconButton } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

interface Props {
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  type?: string;
  onBlur?: any;
  values?: any;
  onChange?: any;
  style?: any;
  helperText?: any;
  error?: any;
  isRequired?: boolean;
  sizeval?: any | string;
  className?: any | string;
  focused: boolean;
  maxLength?: undefined | number;
}

export default function PasswordInput({
  label,
  placeholder,
  id,
  name,
  type,
  onBlur,
  values,
  onChange,
  helperText,
  error,
  sizeval,
  className,
  focused,
  maxLength,
  isRequired,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <TextField
        autoFocus={focused}
        variant="outlined"
        onBlur={onBlur}
        id={id}
        value={values ? values : ""}
        onChange={onChange}
        placeholder={placeholder}
        helperText={helperText}
        error={error}
        required={isRequired}
        name={name}
        onKeyDown={(e: any) => {
          if (e.keyCode === 32) {
            e.preventDefault();
          }
        }}
        label={label}
        size={sizeval}
        type={showPassword ? "text" : "password"}
        inputProps={{
          autoComplete: "new-password",
          form: {
            autoComplete: "off",
          },
          maxLength: maxLength,
        }}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {showPassword ? (
                <Tooltip title={"Hide Password"} placement={"top"}>
                   <IconButton  color="primary" aria-label="delete" onClick={togglePassword}> <VisibilityOutlinedIcon/> </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title={"Show Password"} placement={"top"}>
                   <IconButton  color="primary" aria-label="delete" onClick={togglePassword}> <VisibilityOffOutlinedIcon/> </IconButton>
                </Tooltip>
              )}
            </InputAdornment>
          ),
          startAdornment: (
            <>
               <IconButton  color="primary" aria-label="delete" onClick={togglePassword}> <LockOutlinedIcon/> </IconButton>
            </>
          ),
        }}
        className={`TextField ${className}`}
      />
      {/* <PasswordChecklist
        rules={["minLength", "specialChar", "number", "capital", "lowercase"]}
        minLength={8}
        value={values}
        onChange={(isValid) => { }}
      /> */}
    </>
  );
}
