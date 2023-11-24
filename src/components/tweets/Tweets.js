import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Tweets.css';

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Tweets = () => {
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userId: "",
        id: "",
        title: "",
        body: "",
    });
    const { userId, id, title, body } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( userId && id && title & body ){
            setData([ ...data, formData ]);
            setFormData({ userId: "", id: "", title: "", body: "" });
        }
    }

    const [data, setData] = useState([]);

    const collectData = async () => {
        const commentApi = "https://jsonplaceholder.typicode.com/comments";
        // const createPostApi = "https://jsonplaceholder.typicode.com/comments";

        const artistPostedApi = "https://jsonplaceholder.typicode.com/users";

        
        await axios.get(commentApi)
        .then(response => setComments(response.data))
        .catch(error =>  console.error(error))
        
        await axios.get(artistPostedApi)
        .then(response => setUsers(response.data))
        .catch(error => console.error(error))
        
        

    }
    console.log(users)

    useEffect(() => {
        collectData()
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to delete this tweet?")
        if(confirm){
            axios.delete("https://jsonplaceholder.typicode.com/comments/" + id)
            .then(res => {
                navigate('/')
            })
        }
    }

  return (
    <div className='container'>
        <h1 className='text_1'>Tweets from various artists</h1>
        <Link to='/create'>
            <p className='sm_text'>Create Tweet</p>
        </Link>
        <div className='main'>         
                <h4></h4>
                {
                    users.map(user => (
                        <div key={user.id} className='artist_div'>
                            <h3 className='tag'><span>{user.id}</span> <strong>{user.name}</strong></h3>
                                
                            {
                                comments.map(comment => (
                                    comment.postId === user.id ? (
                                        <article> 
                                            <div>
                                                <Link to='/edit'>
                                                    <span><FaRegEdit /></span>
                                                </Link>
                                                <span onClick={e => handleDelete(comment.id)}><MdDelete /></span>
                                            </div>                                      
                                            <h3>{comment.name}</h3>
                                            <p>{comment.body}</p>                                            
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