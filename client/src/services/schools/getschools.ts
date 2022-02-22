import axios from 'axios';
import Schools from '../../modals/schools';
export const getSchools = async () => {
    try {
        const response = await axios.get<Schools[]>(`${process.env.REACT_APP_API_URL}/schools`)
        .then(response => response.data)
        return response;
    } catch (error) {
        console.log(error);
    }
}