import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authenticationActions from '../../store/actions/authenticationActions';
import Login from './Login/Login';
import Register from './Register/Register';
import './Authentication.css';

class Authentication extends Component {

    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            street: '',
            postcode: '',
            city: '',
            country: '',
            phone: '',
            email: '',
            password: '',
            loginEmail: '',
            loginPassword: '',
            loginStatusMessage: ''
        }
    }

    componentWillUnmount() {
        this.props.resetRegistration();
        this.props.resetLogin();
    }

    firstnameHandler = (event) => {
        this.setState({ firstname: event.target.value });
    }

    lastnameHandler = (event) => {
        this.setState({ lastname: event.target.value });
    }

    streetHandler = (event) => {
        this.setState({ street: event.target.value });
    }

    postcodeHandler = (event) => {
        this.setState({ postcode: event.target.value });
    }

    cityHandler = (event) => {
        this.setState({ city: event.target.value });
    }

    countryHandler = (event) => {
        this.setState({ country: event.target.value });
    }

    phoneHandler = (event) => {
        this.setState({ phone: event.target.value });
    }

    emailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    passwordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    registerHandler = () => {

        let userData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            street: this.state.street,
            postcode: this.state.postcode,
            city: this.state.city,
            country: this.state.country,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        };

        this.props.registerUser(userData);
    }

    loginHandler = () => {

        let userData = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        };

        this.props.loginUser(userData);
    }

    loginEmailHandler = (event) => {
        this.setState({ loginEmail: event.target.value });
    }

    loginPasswordHandler = (event) => {
        this.setState({ loginPassword: event.target.value });
    }

    getStatus = (output, status) => {

        let color = null;
        let statusMessage = null;

        let isEmpty = (obj) => {
            return Object.keys(obj).length === 0;
        }

        if (output && !isEmpty(output)) {
            switch (status) {
                case true:
                    color = { color: "blue" };
                    break;
                case false:
                    color = { color: "red" };
                    break;
                default:
                    color = { color: "black" };
                    break;
            }
            statusMessage = output;
        }

        return [color, statusMessage];
    }

    render() {
        return (
            <>
                <Route exact path="/login"
                    render={() =>
                        <Login
                            emailHandler={this.loginEmailHandler}
                            email={this.state.loginEmail}
                            passwordHandler={this.loginPasswordHandler}
                            password={this.state.loginPassword}
                            getLoginStatus={this.getStatus(this.props.loginState.message, this.props.loginState.status)}
                            statusMessage={this.state.loginStatusMessage}
                            loginHandler={this.loginHandler}
                        />
                    }
                />
                <Route exact path="/register"
                    render={() =>
                        <Register
                            emailHandler={this.emailHandler}
                            email={this.state.email}
                            passwordHandler={this.passwordHandler}
                            password={this.state.password}
                            phoneHandler={this.phoneHandler}
                            phone={this.state.phone}
                            firstnameHandler={this.firstnameHandler}
                            firstname={this.state.firstname}
                            lastnameHandler={this.lastnameHandler}
                            lastname={this.state.lastname}
                            countryHandler={this.countryHandler}
                            country={this.state.country}
                            cityHandler={this.cityHandler}
                            city={this.state.city}
                            postcodeHandler={this.postcodeHandler}
                            postcode={this.state.postcode}
                            streetHandler={this.streetHandler}
                            street={this.state.street}
                            getRegisterStatus={this.getStatus(this.props.registerState.message, this.props.registerState.status)}
                            registerHandler={this.registerHandler}
                        />
                    }
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        registerState: state.authentication.register,
        loginState: state.authentication.login
    }
}

const mapActionToProps = (dispatch) => {
    return {
        registerUser: (userData) => { dispatch(authenticationActions.registerUser(userData)) },
        resetRegistration: () => { dispatch(authenticationActions.resetRegistration()) },
        loginUser: (userData) => { dispatch(authenticationActions.loginUser(userData)) },
        resetLogin: () => { dispatch(authenticationActions.resetLogin()) }
    }
}

export default connect(mapStateToProps, mapActionToProps)(Authentication);
