import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response) {
    console.log(error.response.data.message);
    throw error.response.data;
  }
  throw error;
}


// Functions in  = 'export default'
export default {
  service,

};
