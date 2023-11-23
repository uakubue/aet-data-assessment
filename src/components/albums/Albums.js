import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Albums = () => {
    const [artistName, setArtistName] = useState([]);
    const [albumName, setAlbumName] = useState([]);
    const [photos, setPhotos] = useState([]);
    

    const fetchData = async() => {
        const artistAPi = 'https://jsonplaceholder.typicode.com/users';
        const albumApi = 'https://jsonplaceholder.typicode.com/albums';
        const photoApi = 'https://jsonplaceholder.typicode.com/albums/1/photos';

        //Using Axios to fetch DATA from the Api endpoint
        await axios.get(artistAPi)
        .then(response => setArtistName(response.data))
        .catch(error => console.error(error))

        await axios.get(albumApi)
        .then(response => setAlbumName(response.data))
        .catch(error => console.error(error))

        
        await axios.get(photoApi)
        .then(response => setPhotos(response.data))
        .catch(error => console.log(error))    
       
    }
    console.log(photos)

    useEffect(() => {
        fetchData()
    }, [])



  return (
    <div>
        <h1>Artists and their albums</h1>
        {   
            artistName.map(artist => (
                <div key={artist.id}>
                    <h3>{artist.id}  {artist.name}</h3>
                    
                    {
                        albumName.map(album => (
                            artist.id === album.userId ? (
                                <div key={album.id}>
                                    {
                                        photos.map(photo => (
                                            <div key={photo.id}>
                                                <img src={photo.thumbnailUrl} alt='photo' />
                                            </div>
                                        ))
                                    }
                                    <p> {album.title}</p>
                                    
                                </div>
                                ) 
                                : null
                            )
                        )
                    }
                    {/* albumName.forEach(album => artist.id === album.userId ? (<p>{album.title}</p>) : null
                    // ) */}
                </div>

            ))
            // albumName.map(item => (
            //     <div key={item.id}>
            //         <h3>Artist: {item.userId}</h3>
            //         {
            //             if(){

            //             }
            //         }
            //         <p>{item.userId}.{item.title}</p>
            //         {/* <table>
            //             <tr>
            //                 <th>Artist</th>
            //                 <th>Albums</th>
            //             </tr>

            //             <tr>
            //                 <td>{item.userId}</td>
            //                 <td>{item.title}</td>
            //             </tr>
            //         </table> */}

            //     </div>
            // ))
        }
    </div>
  )
};

export default Albums