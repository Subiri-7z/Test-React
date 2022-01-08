import {useState} from 'react'

const useEmail = () => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);

    const isValidEmail = () => {
        let valid = true;

        if (email === '') {
            valid = false;
            setErrorEmail(true);
        }
        else {
            const rex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            valid = rex.test(email);
            setErrorEmail(!valid);
        }
        return valid;
    }

    const onEmailChange = e => {
        setEmail(e.target.value);
        setErrorEmail(false);
    }

    return {email, onEmailChange, errorEmail, isValidEmail};
}

export default useEmail;
