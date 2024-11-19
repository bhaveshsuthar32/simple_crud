import React, { useEffect, useState } from 'react'
import { deleteUser, getUser } from '../../api';
import { Link } from 'react-router-dom';

export function Home() {
    const [user, setUser] = useState([]);
    

    const getUserData = async()=>{
        const response = await getUser()
        setUser(response.data)
    }

    const handleDelete = async(id)=>{
        try {
            await deleteUser(id);
            getUserData();
        } catch (error) {
            console.log("Error :", error);
        }
    }
    useEffect(()=>{
        getUserData();
    },[])
  return (
    <div>
      <table border="1">
        <thead>
            <th>sr.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
        </thead>
        <tbody>
            {user.map((userInfo, index)=>(
                <tr key={userInfo._id}>
                <td>{index + 1}</td>
                <td>{userInfo.name}</td>
                <td>{userInfo.age}</td>
                <td>{userInfo.city}</td>
                <td><Link onClick={() =>handleDelete(userInfo._id)}>Delete</Link></td>
                <td><Link to={`/editUser/${userInfo._id}`}>Edit</Link></td>
            </tr>
            ))}
            
        </tbody>
      </table>
    </div>
  )
}
