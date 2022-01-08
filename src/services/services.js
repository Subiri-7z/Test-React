import axios from "axios";

export const login = async (email, password) => {
    const body = {email: email, password: password};
    try {
        axios.post("https://api-development.rodeoworld.co.uk/businesses/login", JSON.stringify(body))
            .then(response => {return response});
    } catch (error) {
        const err = error
        if (err.response) {
            console.log(err.response.status)
            console.log(err.response.data)
        }
        this.handleAxiosError(error);
    }
}


