import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tweets.css';

const Tweets = () => {
    const [posts, setPosts] = useState([]);
    const [artistName, setArtistName] = useState([]);

    const collectData = async () => {
        const postApi = "https://jsonplaceholder.typicode.com/posts";
        const artistPostedApi = "https://jsonplaceholder.typicode.com/users";

        
        await axios.get(postApi)
        .then(response => setPosts(response.data))
        .catch(error =>  console.error(error))
        
        await axios.get(artistPostedApi)
        .then(response => setArtistName(response.data))
        .catch(error => console.error(error))
        
        
    }
    console.log(posts)

    useEffect(() => {
        collectData()
    }, [])


  return (
    <div className='container'>
        <h1 className='text_1'>Tweets belonging to various artist</h1>
        <div className='main'>         

                {
                    artistName.map(artist => (
                        <div key={artist.id} className='artist_div'>
                            <h3><span>{artist.id}</span> <strong>{artist.name}</strong></h3>

                            {
                                posts.map(post => (
                                    artist.id === post.userId ? (
                                        <article>                                            
                                            <h3>{post.title}</h3>
                                            <p>{post.body}</p>                                            
                                        </article>
                                    ): null
                                    
                                ))
                            }

                        </div>
                    ))
                }
        </div>
    </div>
  )
}

export default Tweets