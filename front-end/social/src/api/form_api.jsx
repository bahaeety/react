import axios from "axios";

const form_api =axios.create({
    baseURL: 'http://localhost:5000/user',

});
export default form_api;