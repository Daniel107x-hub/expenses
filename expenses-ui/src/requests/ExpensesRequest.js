import axios from "axios"

export const getExpenses = () => {
    return axios("http://localhost:10000/api/expenses")
};