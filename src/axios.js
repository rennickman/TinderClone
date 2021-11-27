import axios from 'axios';



// Create instance of axios
const instance = axios.create({
    baseURL: ' https://rennlad-tinder-backend.herokuapp.com/'
});



export default instance;
