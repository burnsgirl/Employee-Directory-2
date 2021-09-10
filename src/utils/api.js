import axios from 'axios';

const url = "https://randomuser.me/api/?results=20";

const api = {
    search: function(data) {
        return axios.get(url + data);
    }
};

export default api;