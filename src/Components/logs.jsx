import * as React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { PiUserCircle } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";

import { Box } from "@mui/material";
import { MdAccountCircle } from "react-icons/md";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Input as BaseInput, inputClasses } from "@mui/base/Input";

const Input = React.forwardRef(function CustomInput(props, ref) {
  const { slots, ...other } = props;
  return (
    <BaseInput
      slots={{
        root: InputRoot,
        input: InputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

Input.propTypes = {
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType,
    textarea: PropTypes.elementType,
  }),
};
export default function ResponsiveDialog() {
  const [er, setEr] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  // //console(values)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // //console(values)
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const submits = () => {
    if (values.email === "" || values.password === "") {
      setEr(true);
    } else {
      setDialogOpen(false);
      setEr(false);
      setValues({
        email: "",
        password: "",
        showPassword: false,
      });
    }
  };

  // const DialogBox = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEr(false);
    setValues({
      email: "",
      password: "",
      showPassword: false,
    });
  };

  return (
    <Box sx={{ zIndex: "999" }}>
      <Box sx={{ display: "flex" }} variant="outlined" onClick={openDialog}>
        <Box
          display={{
            xs: "none",
            md: "block",
            dispaly: "flex",
            sm: "block",
            xl: "block",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <PiUserCircle style={{ fontSize: "20px", display: "inline" }} />
            Account{" "}
            <FaAngleDown
              style={{ fontSize: "15px", display: "inline", marginTop: "5px" }}
            />
          </Box>
        </Box>
        <Box display={{ xs: "block", md: "none", sm: "none", xl: "none" }}>
          <MdAccountCircle />
        </Box>
      </Box>

      {isDialogOpen && (
        <Box className="overlay">
          <Box className="dialog" onClick={(e) => e.stopPropagation()}>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Box
                  display={{
                    xs: "none",
                    sm: "block",
                    md: "block",
                    xl: "block",
                  }}
                  component="img"
                  src="https://s3.rdbuz.com/Images/webplatform/contextualLogin/desktop-payment-offers.svg"
                  sx={{ width: "100%", padding: "10px" }}
                />
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "15px",
                  }}
                >
                  <Box
                    component="img"
                    src="https://s3.rdbuz.com/Images/logo_r.png"
                  />
                  <Box>
                    <IoClose onClick={closeDialog} />
                  </Box>
                </Box>
                <Box
                  component="h3"
                  sx={{ margin: "15px", color: "red", fontWeight: "800" }}
                >
                  Sign in to avail exciting discounts and cashbacks!!
                </Box>
                <Box>
                  <Box
                    sx={{
                      // position: "relative",
                      zIndex: "20",
                      gap: 0,
                      margin: "5px",
                    }}
                  >
                    <Box sx={{ margin: "5%" }}>
                      <Input
                        id="outlined-start-adornment"
                        type="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        placeholder="Enter Your Email "
                      />
                      {er && values.email === "" ? (
                        <p style={{ color: "red", fontWeight: "700" }}>
                          Enter Your Email
                        </p>
                      ) : (
                        ""
                      )}
                    </Box>
                    <Box sx={{ margin: "5%" }}>
                      <Input
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        placeholder="Enter Your Password "
                        endAdornment={
                          <InputAdornment>
                            <IconButton
                              size="small"
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <FaRegEyeSlash />
                              ) : (
                                <MdOutlineRemoveRedEye />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {er && values.password === "" ? (
                        <p style={{ color: "red", fontWeight: "700" }}>
                          Enter Your Password
                        </p>
                      ) : (
                        ""
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
                          width: "80%",
                          backgroundColor: "red",
                          textAlign: "center",
                          color: "black",
                          fontWeight: "700",
                        }}
                        autoFocus
                        onClick={submits}
                      >
                        login
                      </Button>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputRoot = styled("div")(
  ({ theme }) => `
font-family: 'IBM Plex Sans', sans-serif;
font-weight: 400;
border-radius: 8px;
color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };
display: flex;
align-items: center;
justify-content: center;


&.${inputClasses.focused} {
  border-color: ${blue[400]};
  box-shadow: 0 0 0 3px ${
    theme.palette.mode === "dark" ? blue[600] : blue[200]
  };
}

&:hover {
  border-color: ${blue[400]};
}

// firefox
&:focus-visible {
  outline: 0;
}
`
);

const InputElement = styled("input")(
  ({ theme }) => `
font-size: 0.875rem;
font-family: inherit;
font-weight: 400;
line-height: 1.5;
flex-grow: 1;
color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
background: inherit;
border: none;
border-radius: inherit;
padding: 8px 12px;
outline: 0;
`
);

const IconButton = styled(Button)(
  ({ theme }) => `
display: inline-flex;
align-items: center;
justify-content: center;
border: none;
background: inherit;
cursor: pointer;
color: ${theme.palette.mode === "dark" ? grey[300] : grey[700]};
`
);

const InputAdornment = styled("div")`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
