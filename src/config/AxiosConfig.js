import axios from 'axios';

const AxiosClient=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export default AxiosClient;