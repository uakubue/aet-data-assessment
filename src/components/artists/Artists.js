import React, { useEffect, useState } from 'react';
import './Artists.css';
import api from '../../api';

const Artists = () => {
    const [users, setUsers] = useState([]);
    
 

    const listAllArtists = async() => {
        // Fetching Artists data
        await api.getArtists()
        .then(response => setUsers(response.data))
        .catch(error => console.error('error fetching users:', error))
    }

    useEffect(() => {
        listAllArtists()
    }, [])
        console.log(users)

    



  return (
    // Mapping the fetched data through
    <>
        <div className='container'>
            <h1>Artists</h1>
            {
                users.map(user => (
                    <div 
                        key={user.id}
                        className='list'
                    >
                        <p><span>{user.id}</span>{user.name}</p>                    
                    </div>
                ))
            }
        </div>

        <div>

        </div>
    </>
  )
}

export default Artists;