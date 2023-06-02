import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1&type=boolean',
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    quiz = () => {
        return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
    };
}

export default APIClient;
