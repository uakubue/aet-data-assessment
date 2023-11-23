import axios from "axios";

const endPoint1 = 'https://jsonplaceholder.typicode.com/users';

const endPoint2 = 'https://jsonplaceholder.typicode.com/albums';


const getArtists = artists => {
    return axios.get(endPoint1)
}

const getArtistAlbums = artistAlbums => {
    return axios.get(endPoint2)
}




export default {
    getArtists,
    getArtistAlbums,
}