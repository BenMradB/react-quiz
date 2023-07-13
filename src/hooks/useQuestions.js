import axios from "axios";
import { useEffect } from "react"
const URL = 'http://localhost:8000/questions';
export const useQuestions = (dispatch) => {
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                dispatch({ type: 'questions/loading' });
                const { data } = await axios.get(URL);
                dispatch({ type: 'questions/ready', payload: data });
            } catch (error) {
                dispatch({ type: 'questions/error' });
            }
        }

        fetchQuestions();
    }, [dispatch]);
}