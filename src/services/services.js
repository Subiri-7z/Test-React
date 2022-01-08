import axios from "axios";

export const login = async (email, password) => {
    const body = {email: email, password: password};
    return axios.post("https://api-development.rodeoworld.co.uk/businesses/login", JSON.stringify(body))
        .then(response => {return response});
}


