import axios from "axios"

const URL = "http://localhost:4000"

export const getUser = async() =>{
    try {
        return await axios.get(`${URL}/getUser`);
    } catch (error) {
        console.log("Error : ", error);
    }
}

export const addUser = async(data) =>{
    try {
        return await axios.post(`${URL}/addUser`,data)
    } catch (error) {
        console.log("Error : ", error);
    }
}

export const deleteUser = async(id) =>{
    try {
        return await axios.delete(`${URL}/deleteUser/${id}`)
    } catch (error) {
        console.log("Error : ", error);
    }
}

export const updateUser = async(id, data) =>{
    try {
        return await axios.patch(`${URL}/updateUser/${id}`, data)
    } catch (error) {
        console.log("Error : ", error);
    }
}


export const getUserId = async (id) => {
    try {
      return await axios.get(`${URL}/getUser/${id}`); // Fetch specific user by ID
    } catch (error) {
      console.log("Error:", error);
    }
  };
  