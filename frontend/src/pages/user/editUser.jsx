import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserId, updateUser } from '../../api';

export function EditUser() {
  const [user, setUser] = useState({
    name: '',
    age: '',
    city: '',
  });

  const { id } = useParams(); // Get the user ID from URL
  const navigate = useNavigate();

  // Fetch the user data for the given ID
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserId(id); // Fetch user by ID
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user); // Call the update API
      navigate('/'); // Redirect to home page after successful update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>
                <input
                  type="text"
                  name="age"
                  value={user.age}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>City:</td>
              <td>
                <input
                  type="text"
                  name="city"
                  value={user.city}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
