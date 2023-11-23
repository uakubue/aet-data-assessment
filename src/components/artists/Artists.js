import React, { useEffect, useState } from 'react';
import './Artists.css';
import api from '../../api';

const Artists = () => {
    const [users, setUsers] = useState([])


    const listAllArtists = async() => {
        // Fetching Artists data
        await api.getArtists("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .catch(error => console.error('error fetching users:', error))
    }

useEffect(() => {
    listAllArtists()
}, [])
    console.log(users)

  return (
    // Mapping the fetched data
    <div className='container'>
        <h1>Chocolate City Artists</h1>
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
  )
}

export default Artists;