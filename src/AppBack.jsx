import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './appback.css'

const AppBack = () => {
    const [users,setUser]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8989/getUsering')
        .then(users => setUser(users.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div className='dummycont'>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        phone No
                    </th>
                    <th>
                        city
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>{
                       return <tr>
                            <td>{user.u_name}</td>
                            <td>{user.email_id}</td>
                            <td>{user.phn_no}</td>
                            <td>{user.city}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default AppBack