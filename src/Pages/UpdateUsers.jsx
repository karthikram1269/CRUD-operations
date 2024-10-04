import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateUsers = () => {
    let [values,setValues] = useState({name:"",username : "",email : ""});
    let navigate = useNavigate();
    let change = (e) => {
        setValues({...values,[e.target.name] : [e.target.value]});
    }

    let {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:2203/users/"+id)
        .then(res => setValues(res.data))
    },[])

    function update(e){
        e.preventDefault()
        axios.put("http://localhost:2203/users/"+id,values)
        .then(() => {
            navigate("/")
        })
    }
    

  return (
    <div id='containerU'>
      <h1 id='titleU'>Edit user</h1>
      <form id='formU' action="">
        <input id='nameU' onChange={change} type="text" placeholder='name' name='name' value={values.name}/> 
        <br />
        <input id='usernameU' onChange={change} type="text" placeholder='username' name='username' value={values.username}/> 
        <br />
        <input id="emailU" onChange={change} type="email" placeholder = "email address" name='email' value={values.email}/>
        <br />
        <button id='btn' onClick={update}>Update User</button>
      </form>
    </div>
  )
}

export default UpdateUsers
