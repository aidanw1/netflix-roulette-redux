import axios from "axios";

// axios.defaults.baseURL = "https://netflix-app-roulette.herokuapp.com";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export default axios;
