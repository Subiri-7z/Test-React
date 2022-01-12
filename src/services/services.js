import axios from "axios";

export const login = async (email, password) => {
  let config = {
    mode: 'noCors',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  const body = {'email': email, 'password': password};

  try {
    return axios.post("https://api.rodeoworld.co.uk/businesses/login", body, config)
      .then((response) => {return response});
  } catch (error) {
    const err = error
    if (err.response) {
      console.log(err.response.status)
      console.log(err.response.data)
    }
    this.handleAxiosError(error);
  }
  //if (email === 'support@rodeoworld.co.uk' && password === '1q2w3e4r') {
  //return {status: 200, data: {token: '123'}}
  //}
  //else {
  //return {status: 401, data: {}}
  //}
}

export const getVenues = async (token, idBusiness) => {
  let config = {
    mode: 'noCors',
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }
  try {
    return axios.get(`https://api.rodeoworld.co.uk/venues/list?idBusiness=${idBusiness}`, config)
      .then(response => {
        return response.data;
      });
  } catch (error) {
    const err = error
    if (err.response) {
      console.log(err.response.status)
      console.log(err.response.data)
    }
    this.handleAxiosError(error);
  }
}

export const getOffers = async (token, idVenue) => {
  let config = {
    mode: 'noCors',
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }
  try {
    return axios.get(`https://api.rodeoworld.co.uk/offers/list/${idVenue}`, config)
      .then(response => {
        return response.data;
      });
  } catch (error) {
    const err = error
    if (err.response) {
      console.log(err.response.status)
      console.log(err.response.data)
    }
    this.handleAxiosError(error);
  }
}

export const getOfferDetails = async (token, idOffer) => {
  let config = {
    mode: 'noCors',
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }
  try {
    return axios.get(`https://api.rodeoworld.co.uk/offers/${idOffer}`, config)
      .then(response => {
        return response.data;
      });
  } catch (error) {
    const err = error
    if (err.response) {
      console.log(err.response.status)
      console.log(err.response.data)
    }
    this.handleAxiosError(error);
  }
}
