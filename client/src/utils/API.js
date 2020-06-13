import axios from 'axios';

export default {
    getBooks: function() {
        console.log("hello");
        return axios.get('/api/saved');
    }
}