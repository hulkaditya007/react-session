import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8081', // Adjust this if necessary
    // Add default headers if needed
    headers: {
      'Content-Type': 'application/json',
    },
  });
  

export {httpClient}