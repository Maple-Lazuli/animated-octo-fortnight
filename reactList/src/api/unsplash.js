import axios from 'axios';

export default  axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID iYSkPfb2uSVlqLXwqVGUZm6MsLA-JR-8vuTB2V0fLN0'
    }
})

