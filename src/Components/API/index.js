import Axios from "axios";

const client = Axios.create({
  headers: {
    "content-type": "application/json",
    "x-access-token":localStorage.getItem('token')
  },
  baseURL: "http://192.168.43.111:3001/api",
});

export default client;
