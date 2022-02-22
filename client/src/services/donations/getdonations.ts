import axios from 'axios';
import Donations from '../../modals/donations';

export const getDonations = async () => {
    try {
        const response = await axios.get<Donations[]>(`${process.env.REACT_APP_API_URL}/donations`)
        .then(response => response.data)
        return response;
    } catch (error) {
        console.log(error);
    }
}