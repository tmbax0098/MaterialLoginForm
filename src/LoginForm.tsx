import * as React from 'react';
import * as PropTypes from "prop-types";
import {
    Box,
    Typography,
    Button,
    Link,
    FormControl,
    InputAdornment,
    IconButton,
    CircularProgress,
    OutlinedInput
} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

interface LoginFormProps {
    wait: boolean;
    disabled: boolean;
    borderWidth: number;
    title: string;
    className: any;
    forgetPasswordLabel: string;
    forgetPasswordUrl: string;
    loginButtonLabel: string;
    signupButtonLabel: string;
    signupUrl: string;
    onClickLogin: any;
    showSignUp: boolean;
    showForgetPassword: boolean;
    showTitle: boolean;
};
LoginForm.propTypes = {
    borderWidth: PropTypes.number,
    title: PropTypes.string,
    className: PropTypes.any,
    forgetPasswordLabel: PropTypes.string,
    forgetPasswordUrl: PropTypes.string,
    loginButtonLabel: PropTypes.string,
    signupButtonLabel: PropTypes.string,
    signupUrl: PropTypes.string,
    onClickLogin: PropTypes.func,
    showSignUp: PropTypes.bool,
    showForgetPassword: PropTypes.bool,
    showTitle: PropTypes.bool,
};
LoginForm.defaultProps = {
    borderWidth: 1,
    title: "Title",
    className: "",
    forgetPasswordLabel: "Forget password",
    forgetPasswordUrl: "/ForgetPassword",
    loginButtonLabel: "Login",
    signupButtonLabel: "Sign up",
    signupUrl: "/SignUp",
    onClickLogin: (state: State) => {
        console.log(state);
    },
    showSignUp: true,
    showForgetPassword: true,
    showTitle: true,
};
interface State {
    username: string;
    password: string;
    showPassword: boolean;
};
function LoginForm(props: LoginFormProps) {

    const [state, setState] = React.useState<State>({
        username: "",
        password: "",
        showPassword: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setState({ ...state, showPassword: !state.showPassword });
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <Box border={props.borderWidth} borderColor="divider" className={props.className} >
            {props.showTitle ? <Box bgcolor="background.default" p={1}>
                <Typography variant="h5">
                    {props.title}
                </Typography>
            </Box>
                : null}
            <Box p={2} borderTop={props.showTitle ? props.borderWidth : 0} borderColor="divider">
                <form >
                    <FormControl fullWidth disabled={props.disabled || props.wait}>
                        <OutlinedInput
                            placeholder={"Username"}
                            id="standard-adornment-username"
                            type={"email"}
                            value={state.username}
                            onChange={handleChange('username')}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Box p={2} />
                    <FormControl fullWidth disabled={props.disabled || props.wait}>
                        <OutlinedInput
                            placeholder={"Password"}
                            id="standard-adornment-password"
                            type={state.showPassword ? 'text' : 'password'}
                            value={state.password}
                            onChange={handleChange('password')}
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        disabled={props.disabled || props.wait}
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}>
                                        {state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </form>
            </Box>
            <Box m={2}>
                {props.showForgetPassword ? <Link
                    {...props.disabled || props.wait ? {} : { href: props.forgetPasswordUrl }}>
                    {props.forgetPasswordLabel}
                </Link> : null}
            </Box>
            <Box m={2} display="flex" flexDirection="row">
                <Button
                    disableElevation
                    disableFocusRipple
                    disableTouchRipple
                    disableRipple
                    size="large"
                    disabled={props.disabled}
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                    {...props.wait ? {} : { onClick: () => props.onClickLogin({ username: state.username, password: state.password }) }}
                >
                    {props.wait ? <CircularProgress color="inherit" size={22} /> : props.loginButtonLabel}
                </Button>

                {props.showSignUp ?
                    <Button
                        disableElevation
                        disableFocusRipple
                        disableTouchRipple
                        disableRipple
                        size="large"
                        disabled={props.disabled}
                        fullWidth={true}
                        variant="text"
                        color="primary"
                        onClick={() => window.location.href = "/signup"}
                    >
                        {props.signupButtonLabel}
                    </Button>
                    : null}
            </Box>
        </Box >
    );
};
export default LoginForm;