import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {

    let [color, message] = props.getLoginStatus;

    return (
        <div className="form login container">
            <div className="form-head">
                <h1>Login</h1>
            </div>
            <div className="form-body">
                <input type="email" placeholder="Email eingeben" onChange={(event) => { props.emailHandler(event) }} value={props.email} />
                <input type="password" placeholder="Passwort eingeben" onChange={(event) => { props.passwordHandler(event) }} value={props.password} />
            </div>
            <div className="form-footer">
                <ul>
                    <li>
                        <button className="main-button" onClick={props.loginHandler} >Login</button>
                    </li>
                    <li>
                        <p style={color}>{message}</p>
                    </li>
                    <li>
                        <hr />
                    </li>
                    <li>
                        <Link to="/register">Du hast noch keinen Account?</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Login;
