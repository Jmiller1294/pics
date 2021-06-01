import axios from 'axios';

export default axios.create({ 
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ohCmy02Rpvd2hYuOpmNKQqhiUc-JC6EyQpevpJEAyTs'
  }
})