import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const EditForm = () => {
    const [data, setData] = useState([]);
    const {id}  = useParams();

    const [values, setValues] = useState({
        userId: "",
        id: "",
        title: "",
        body: "",
    })

    const navigate = useNavigate();

    const collectData = async() => {
      await axios.get('https://jsonplaceholder.typicode.com/comments' + id)
        .then(res => setData(res.data))
        .catch(res => console.log(res))
    }

    useEffect(() => {
      collectData();
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/comments/'+id, values)
        .then(response => {
            console.log(response)
            navigate('/')
            })
            .catch(error =>  console.error(error))
    }

    


  return (
    <div>
        <h1>Edit Tweet</h1>
        <form onSubmit={handleUpdate}>
            <div>
                <label>Title</label>
                <input type='text' id='title' name='title' minLength='3' value={data.title} placeholder='Edit title' />
            </div>

            <div>
                <label>Description</label>
                <input type='text' id='body' name='body' minLength='4' value={data.body} placeholder='Edit description' />
            </div>

            <Link to='/'>
              <button>Back</button>
            </Link>
            <button>Edit Tweet</button>

        </form>

    </div>
  )
}

export default EditForm