import {useState} from "react";

const usePassword = () => {
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState(false);

    const isValidPassword = () => {
        let valid = true;
        if (password === '') {
            valid = false;
            setErrorPassword(true);
        }
        return valid;
    }

    const onPasswordChange = e => {
        setPassword(e.target.value);
        setErrorPassword(false);
    }

    return {password, onPasswordChange, isValidPassword, errorPassword}

}

export default usePassword;
