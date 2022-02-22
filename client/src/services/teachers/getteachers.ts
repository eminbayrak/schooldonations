import axios from 'axios';
import Teachers from '../../modals/teachers';

export const getTeachers = async () => {
    try {
        const response = await axios.get<Teachers[]>(`${process.env.REACT_APP_API_URL}/teachers`)
        .then(response => response.data)
        return response;
    } catch (error) {
        console.log(error);
    }
}