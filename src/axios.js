import axios from "axios";


const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
}
)

export default instance;


/* fetched data  from that link which we will be using later */