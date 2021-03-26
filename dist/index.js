Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var core = require('@material-ui/core');
var Visibility = require('@material-ui/icons/Visibility');
var VisibilityOff = require('@material-ui/icons/VisibilityOff');
var PersonIcon = require('@material-ui/icons/Person');
var LockIcon = require('@material-ui/icons/Lock');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Visibility__default = /*#__PURE__*/_interopDefaultLegacy(Visibility);
var VisibilityOff__default = /*#__PURE__*/_interopDefaultLegacy(VisibilityOff);
var PersonIcon__default = /*#__PURE__*/_interopDefaultLegacy(PersonIcon);
var LockIcon__default = /*#__PURE__*/_interopDefaultLegacy(LockIcon);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
    onClickLogin: function (state) {
        console.log(state);
    },
    showSignUp: true,
    showForgetPassword: true,
    showTitle: true,
};
function LoginForm(props) {
    var _a = React.useState({
        username: "",
        password: "",
        showPassword: false,
    }), state = _a[0], setState = _a[1];
    var handleChange = function (prop) { return function (event) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[prop] = event.target.value, _a)));
    }; };
    var handleClickShowPassword = function () {
        setState(__assign(__assign({}, state), { showPassword: !state.showPassword }));
    };
    var handleMouseDownPassword = function (event) {
        event.preventDefault();
    };
    return (React.createElement(core.Box, { border: props.borderWidth, borderColor: "divider", className: props.className },
        props.showTitle ? React.createElement(core.Box, { bgcolor: "background.default", p: 1 },
            React.createElement(core.Typography, { variant: "h5" }, props.title))
            : null,
        React.createElement(core.Box, { p: 2, borderTop: props.showTitle ? props.borderWidth : 0, borderColor: "divider" },
            React.createElement("form", null,
                React.createElement(core.FormControl, { fullWidth: true, disabled: props.disabled || props.wait },
                    React.createElement(core.OutlinedInput, { placeholder: "Username", id: "standard-adornment-username", type: "email", value: state.username, onChange: handleChange('username'), startAdornment: React.createElement(core.InputAdornment, { position: "start" },
                            React.createElement(PersonIcon__default['default'], null)) })),
                React.createElement(core.Box, { p: 2 }),
                React.createElement(core.FormControl, { fullWidth: true, disabled: props.disabled || props.wait },
                    React.createElement(core.OutlinedInput, { placeholder: "Password", id: "standard-adornment-password", type: state.showPassword ? 'text' : 'password', value: state.password, onChange: handleChange('password'), startAdornment: React.createElement(core.InputAdornment, { position: "start" },
                            React.createElement(LockIcon__default['default'], null)), endAdornment: React.createElement(core.InputAdornment, { position: "end" },
                            React.createElement(core.IconButton, { disabled: props.disabled || props.wait, "aria-label": "toggle password visibility", onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword }, state.showPassword ? React.createElement(Visibility__default['default'], null) : React.createElement(VisibilityOff__default['default'], null))) })))),
        React.createElement(core.Box, { m: 2 }, props.showForgetPassword ? React.createElement(core.Link, __assign({}, props.disabled || props.wait ? {} : { href: props.forgetPasswordUrl }), props.forgetPasswordLabel) : null),
        React.createElement(core.Box, { m: 2, display: "flex", flexDirection: "row" },
            React.createElement(core.Button, __assign({ disableElevation: true, disableFocusRipple: true, disableTouchRipple: true, disableRipple: true, size: "large", disabled: props.disabled, fullWidth: true, variant: "contained", color: "primary" }, props.wait ? {} : { onClick: function () { return props.onClickLogin({ username: state.username, password: state.password }); } }), props.wait ? React.createElement(core.CircularProgress, { color: "inherit", size: 22 }) : props.loginButtonLabel),
            props.showSignUp ?
                React.createElement(core.Button, { disableElevation: true, disableFocusRipple: true, disableTouchRipple: true, disableRipple: true, size: "large", disabled: props.disabled, fullWidth: true, variant: "text", color: "primary", onClick: function () { return window.location.href = "/signup"; } }, props.signupButtonLabel)
                : null)));
}

exports.default = LoginForm;
//# sourceMappingURL=index.js.map
