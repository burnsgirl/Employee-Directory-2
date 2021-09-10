import axios from 'axios';

const url = "https://randomuser.me/api/?results=20";

const Api = {
    search: function(data) {
        return axios.get(url + data);
    }
};

export default Api;