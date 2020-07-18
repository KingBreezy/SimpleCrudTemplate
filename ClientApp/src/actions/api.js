import axios from 'axios';

const baseUrl = 'https://localhost:44366/api/';

export default {
    userDetail(url = baseUrl+'userdetails/'){
        return {
            fetchAll : () => axios.get(url),
            fetchAllById: (id) => axios.get(`${url}${id}`),
            updateUserDetails: (id, record) => axios.put(`${url}${id}`, record),
            deleteUserDetails: (id) => axios.delete(`${url}${id}`),
            createUserDetails: record => axios.post(`${url}`, record)
        }
    }
}

