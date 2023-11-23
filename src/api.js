import axios from "axios";

const endPoint1 = 'https://jsonplaceholder.typicode.com/users';



const getArtists = artists => {
    return axios.get(endPoint1)
}




export default {
    getArtists,
   
}