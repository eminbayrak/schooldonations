import axios from 'axios';
import Donors from '../../modals/donors';

export const getDonors = async () => {
    try {
        const response = await axios.get<Donors[]>(`${process.env.REACT_APP_API_URL}/donors`)
        .then(response => response.data)
        return response;
    } catch (error) {
        console.log(error);
    }
}