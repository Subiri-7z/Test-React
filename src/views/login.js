import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {login} from "../services/services";
import './login.css'
import useEmail from "../hooks/useEmail";
import usePassword from "../hooks/usePassword";
import {useHistory} from "react-router-dom";
import {login as loginAction} from "../redux/actions/user.actions";

function Login({loginAction, user}) {
    const history = useHistory();
    const {email, onEmailChange, errorEmail, isValidEmail} = useEmail();
    const {password, onPasswordChange, errorPassword, isValidPassword} = usePassword();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (user.token !== '')
            history.push("/venues");
    }, [user])

    const handleSubmit = (event) => {
        event.preventDefault();

        const vemail = isValidEmail();
        const vpassword = isValidPassword();

        if (vemail && vpassword) {
            //console.log("Login executed correctly");
            login(email, password)
                .then(response => {
                    const {status, data} = response;
                    if (status === 200) {
                        loginAction(data);
                    }
                    else if (status === 401)
                        setError(true);
                })
            //setError(true);

        }
        else {
            console.log("Error");

        }

    };
    return (
        <>
            <section className='FlexContainer'>
                <div>
                    {error
                        &&
                        <h1>USER NOT REGISTERED</h1>}
                    <h2>LOGIN</h2>
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
                </div>
            </section>
        </>

    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {loginAction};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
