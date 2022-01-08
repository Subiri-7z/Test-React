import axios from "axios";

export const login = async (email, password) => {
    //let config = {
    //mode: 'noCors',
    //method: 'post',
    //headers: {
    //'Accept': 'application/json',
    //'Content-Type': 'application/json',
    //}
    //}
    //const body = {'email': email, 'password': password};

    //try {
    //axios.post("https://api-development.rodeoworld.co.uk/businesses/login", body, config)
    //.then(response => {return response});
    //} catch (error) {
    //const err = error
    //if (err.response) {
    //console.log(err.response.status)
    //console.log(err.response.data)
    //}
    //this.handleAxiosError(error);
    //}
    if (email === 'support@rodeoworld.co.uk' && password === '1q2w3e4r') {
        return {status: 200, data: {token: '123'}}
    }
    else {
        return {status: 401, data: {}}
    }
}

export const getVenues = async () => {
    return [
        {
            id: 1,
            title: "House 1",
            description: "Very big",
            price: 100000,
        },
        {
            id: 2,
            title: "House 2",
            description: "Very small",
            price: 10000,
        },
    ]
}

export const listOffers = async () => {
    return [
        {
            id: 1,
            amount: 220000,
            user: "John",
            date: "2022-01-08 20:25"
        },
        {
            id: 4,
            amount: 222000,
            user: "Pepe",
            date: "2021-11-28 10:13"
        },
    ]
}
