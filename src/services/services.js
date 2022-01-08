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

export const getOffers = async (idBusiness) => {
    return [
        {
            id: 1,
            amount: 220000,
            user: {
                name: "John",
                address: "14 My Street",
                city: "Southampton",
                postcode: "SO53 5PD",
                country: "UK",
            },
            date: "2022-01-08 20:25",
            message: "This message is really lengthy..."
        },
        {
            id: 4,
            amount: 222000,
            user: {
                name: "Pepe",
                address: "30 My Another Street",
                city: "London",
                postcode: "BR1 3AE",
                country: "UK",
            },
            date: "2021-11-28 10:13",
            message: "This is another lengthy message by an user whom's got an offer..."
        },
    ]
}

export const getOfferDetails = async (idOffer) => {
    return {
        id: 1,
        venueid: 1,
        amount: 220000,
        user: {
            name: "John",
            address: "14 My Street",
            city: "Southampton",
            postcode: "SO53 5PD",
            country: "UK",
        },
        date: "2022-01-08 20:25",
        message: "This message is really lengthy...",
    };
}
