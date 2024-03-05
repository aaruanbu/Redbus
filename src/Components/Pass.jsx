import * as React from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/system";
// import { Button } from "@mui/base/Button";
import { Button } from "@mui/material"
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Input as BaseInput, inputClasses } from "@mui/base/Input";
import Visibility from "@mui/material/Icon";
import VisibilityOff from "@mui/material/Icon";


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

export default function InputAdornments() {
    const [er, setEr] = React.useState(false)
    const [values, setValues] = React.useState({
        email: "",
        password: "",
        showPassword: false,
    });
    console.log(values)
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    console.log(values)
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
            setEr(true)
        }
        else {

        }
    }

    return (
        <Box
            sx={{
                gap: 0,
                margin: "5px"
            }}
        >
            <Box sx={{ margin: "5px" }} >
                <Input
                    id="outlined-start-adornment"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    placeholder="Enter Your Email "

                // startAdornment={<InputAdornment>kg</InputAdornment>}
                />
            </Box>
            {er && values.email === "" ? <p>Enter Your Email</p> : ""}
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
            {er && values.password === "" ? <p>Enter Your Email</p> : ""}

            <Button sx={{ width: "80%", backgroundColor: "red", textAlign: "center", color: "black", fontWeight: "700" }} autoFocus onClick={submits}>
                login
            </Button>
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
  box-shadow: 0px 2px 4px ${theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
        };
  display: flex;
  align-items: center;
  justify-content: center;


  &.${inputClasses.focused} {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]
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
