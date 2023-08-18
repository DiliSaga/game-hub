import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {key:'83134283820d4f10880355c3a09aa5e0'}
});