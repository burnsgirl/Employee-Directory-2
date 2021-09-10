import axios from 'axios';

const url = "https://randomuser.me/api/?seed=emp";

const API = {
    search: function(data) {
        return axios.get(url + data);
    }
};

export default API;