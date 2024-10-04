import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GetUsers = () => {

    let navigate = useNavigate();
    let [state,setState] = useState([]);
    let [thead,setThead] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:2203/users")
        .then(res => {
            setState(res.data)
            setThead(Object.keys(res.data[0]).slice(0,4))
        })
        .catch(e => console.log(e))
    },[state])
    // console.log(thead);
    function deletes(id){
        axios.delete("http://localhost:2203/users/"+id)
        .then(() => {
            navigate("/")
        })
    }

  return (
    <table id="crud">
    <caption id="table-caption">
        CRUD OPERATIONS
        <button id="outB" onClick={() => navigate("/add")}>add+</button>
    </caption>

    <thead id="table-head">
        <tr id="table-head-row">
            {thead.map((x, index) => (
                <th key={index}>{x}</th>
            ))}
            <th>operations</th>
        </tr>
    </thead>

    <tbody id="table-body">
        {state.map(res => (
            <tr key={res.id} id={`row-${res.id}`}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.username}</td>
                <td>{res.email}</td>
                <td>
                    <Link to={`/edit/${res.id}`}><button>EDIT</button></Link>&nbsp;
                    <button id='delt' onClick={() => deletes(res.id)}>DELETE</button>
                </td>
            </tr>
        ))}
    </tbody>
</table>

  )
}

export default GetUsers
