import axios from 'axios';
import Resource from '../../modals/resource';

export const getDonations = async () => {
    try {
        const response = await axios.get<Resource[]>(`${process.env.REACT_APP_API_URL}/donations`)
        .then(response => response.data)
        return response;
    } catch (error) {
        console.log(error);
    }
}