import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateForm = () => {
    const navigate = useNavigate();

    // const [formData, setFormData] = useState({
        
    //     title: "",
    //     body: "",
    // });

    // const { title, body } = formData;
    //  const [data, setData] = useState([]);

    const [values, setValues] = useState({
        userId: "",
        id: "",
        title: "",
        body: "",
    })

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/comments", values)
            .then(response => {
            console.log(response)
            navigate('/')
            })
            .catch(error =>  console.error(error))
    }
    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }

  return (
      <div>
          <h1>Add a Tweet</h1>
          <form onSubmit={handleSubmit}>
              <div>
                <label>User ID</label>
                <input type='number' id='userId' name='userId' onChange={e => setValues({ ...values, userId: e.target.value })}  placeholder='Enter userId' />
              </div>

              <div>
                <label>ID</label>
                <input type='number' id='id' name='id' onChange={e => setValues({ ...values, id: e.target.value })}  placeholder='Enter ID' />
              </div>

              <div>
                  <label>Title</label>
                  <input type='text' id='title' name='title' onChange={e => setValues({ ...values, title: e.target.value })}  minLength='3' placeholder='Enter title' />
              </div>

              <div>
                  <label>Description</label>
                  <input type='text' id='body' name='body' onChange={e => setValues({ ...values, body: e.target.value })} minLength='4' placeholder='Enter title' />
              </div>
              <Link to='/'>
                <button>Back</button>
              </Link>
              <button>Tweet</button>

          </form>

      </div>
  )
}

export default CreateForm