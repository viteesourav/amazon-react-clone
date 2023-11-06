import axios from 'axios';
import { BASE_URL } from './constants';

const config = {
    "headers": {
        "Content-Type" : "application/json",
        "Accept": "application/json"
    }
}

export const fetchData = async (resource) => {
    const resp = await axios.get(`${BASE_URL}/${resource}.json`, config);
    // console.log('###API_resp: ',resp);
    return resp.data;
};