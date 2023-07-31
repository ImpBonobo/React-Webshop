import React from 'react'
import './Register.css';

function Register(props) {


    let [color, message] = props.getRegisterStatus;

    return (
        <div className="form register container">
            <div className="form-head">
                <h1>Willkommen</h1>
                <p>Bitte persönliche Informationen eingeben</p>
            </div>
            <div className="form-body data">
                <input type="email" placeholder="Email eingeben" onChange={(event) => { props.emailHandler(event) }} value={props.email} />
                <input type="Password" placeholder="Passwort eingeben" onChange={(event) => { props.passwordHandler(event) }} value={props.password} />
            </div>
            <div className="form-body personal">
                <input type="text" placeholder="Vorname" onChange={(event) => { props.firstnameHandler(event) }} value={props.firstname} />
                <input type="text" placeholder="Nachname" onChange={(event) => { props.lastnameHandler(event) }} value={props.lastname} />
                <input type="text" placeholder="Straße" onChange={(event) => { props.streetHandler(event) }} value={props.street} />
                <input type="text" placeholder="Postleitzahl" onChange={(event) => { props.postcodeHandler(event) }} value={props.postcode} />
                <input type="text" placeholder="Stadt" onChange={(event) => { props.cityHandler(event) }} value={props.city} />
                <input type="text" placeholder="Land" onChange={(event) => { props.countryHandler(event) }} value={props.country} />
                <input type="tel" placeholder="Telefonnummer" onChange={(event) => { props.phoneHandler(event) }} value={props.phone} />
            </div>
            <div className="form-footer">
                <ul>
                    <li>
                        <button className="main-button" onClick={() => { props.registerHandler() }}>Registrieren</button>
                    </li>
                    <li>
                        <p style={color}>{message}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Register;
