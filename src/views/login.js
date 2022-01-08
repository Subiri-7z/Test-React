import React, {useState} from "react";
import {login} from "../services/services";
import './login.css'
import useEmail from "../hooks/useEmail";
import usePassword from "../hooks/usePassword";
import {useHistory} from "react-router-dom";

function Login() {
    const history = useHistory();
    const {email, onEmailChange, errorEmail, isValidEmail} = useEmail();
    const {password, onPasswordChange, errorPassword, isValidPassword} = usePassword();
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const vemail = isValidEmail();
        const vpassword = isValidPassword();

        console.log(vemail);
        console.log(vpassword);
        if (vemail && vpassword) {
            //console.log("Login ejecutado correctamente.");
            login(email, password)
                .then(response => console.log(response));
            history.push("/venues");
            setError(true);

        }
        else {
            console.log("Ha petat");

        }


        //const data = {email, password};
        //const requestOptions = {
        //method: "POST",
        //headers: {
        //"Content-Type": "application/json",
        //"Origin": "http://localhost:3000/",
        //},
        //body: JSON.stringify(data)
        //};
        //fetch("https://api-development.rodeoworld.co.uk/businesses/login", requestOptions)
        //.then(response => response.json())
        //.then(res => console.log(res));
    };
    return (
        <>
            {error
                &&
                <h1>USER NOT REGISTERED</h1>}
            <form>
                <label>Email:
                    <input
                        className={errorEmail ? 'error' : ''}
                        type="text"
                        value={email}
                        required
                        onChange={onEmailChange} />
                </label>
                <label>Password:
                    <input
                        className={errorPassword ? 'error' : ''}
                        type="password"
                        value={password}
                        onChange={onPasswordChange} />
                </label>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </>

    );
}


export default Login;
