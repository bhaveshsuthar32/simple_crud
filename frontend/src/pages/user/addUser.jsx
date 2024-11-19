import React,{ useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../api';

const defaultValue = {
    name : "",
    age : "",
    city : "",
}

export function AddUser() {
    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();
    

    const handleChange = async (e) =>{
        setUser({ ...user, [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await addUser(user);
            navigate("/")
        } catch (error) {
            console.log("Error : ",error);
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <tr>
                <td>Name</td>
                <td>
                    <input
                     type="text"
                     name='name'
                     onChange={handleChange}
                    placeholder='Enter name'
                    />
                </td>
            </tr>
            <tr>
                <td>Age</td>
                <td>
                    <input
                     type="text"
                     name='age'
                     onChange={handleChange}
                    placeholder='Enter age'
                    />
                </td>
            </tr>
            <tr>
                <td>City</td>
                <td>
                    <input
                     type="text"
                     name='city'
                     onChange={handleChange}
                    placeholder='Enter city'
                    />
                </td>
            </tr>
            <tr>
                <input type="submit" value="Save" />
            </tr>
        </div>
      </form>
    </div>
  )
}
