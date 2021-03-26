/// <reference types="react" />
import * as PropTypes from "prop-types";
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
}
interface State {
    username: string;
    password: string;
    showPassword: boolean;
}
declare function LoginForm(props: LoginFormProps): JSX.Element;
declare namespace LoginForm {
    var propTypes: {
        borderWidth: PropTypes.Requireable<number>;
        title: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<any>;
        forgetPasswordLabel: PropTypes.Requireable<string>;
        forgetPasswordUrl: PropTypes.Requireable<string>;
        loginButtonLabel: PropTypes.Requireable<string>;
        signupButtonLabel: PropTypes.Requireable<string>;
        signupUrl: PropTypes.Requireable<string>;
        onClickLogin: PropTypes.Requireable<(...args: any[]) => any>;
        showSignUp: PropTypes.Requireable<boolean>;
        showForgetPassword: PropTypes.Requireable<boolean>;
        showTitle: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        borderWidth: number;
        title: string;
        className: string;
        forgetPasswordLabel: string;
        forgetPasswordUrl: string;
        loginButtonLabel: string;
        signupButtonLabel: string;
        signupUrl: string;
        onClickLogin: (state: State) => void;
        showSignUp: boolean;
        showForgetPassword: boolean;
        showTitle: boolean;
    };
}
export default LoginForm;
