import axios from 'axios'

const API_URL = import.meta.env.VITE_BASE_URL;

export const fetchStudents = async () => {
    const res = await axios.get(`${API_URL}/students`, {
        headers: {
            'api-key': 'akusianakgembala'
        }
    })
    console.log(res.data);
    return res.data;
}

export const addStudent = async (student) => {
    const res = await axios.post(`${API_URL}/students`, student, {
        headers: {
            'Content-Type': 'application/json',
            'api-key': 'akusianakgembala'
        }
    })
    console.log(res.data);
    return res.data;
}

export const deleteStudent = async (id) => {
    const res = await axios.delete(`${API_URL}/students/${id}`, {
        headers: {
            'api-key': 'akusianakgembala'
        }
    })
    console.log(res.data);
    return res.data;
}

export const detailStudent = async (id) => {
    const res = await axios.get(`${API_URL}/students/${id}`, {
        headers: {
            'api-key': 'akusianakgembala'
        }
    })
    console.log(res.data);
    return res.data;
}

export const updateStudent = async (id, student) => {
    const res = await axios.put(`${API_URL}/students/${id}`, student, {
        headers: {
            'Content-Type': 'application/json',
            'api-key': 'akusianakgembala'
        }
    })
    console.log(res.data);
    return res.data;
}