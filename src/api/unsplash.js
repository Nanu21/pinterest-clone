import axios from 'axios';

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID g3R0gabj8Ro42FfkVursWUSdIhpJevWR3BuLecHk3r0"
        
    }
})