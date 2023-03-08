import axios from "axios";

export const getExpenses = () => {
  return axios("http://localhost:10000/api/expenses");
};

export const addExpense = (expense) => {
  return axios.post("http://localhost:10000/api/expenses", expense);
};

export const deleteExpense = (id) => {
  return axios.delete(`http://localhost:10000/api/expenses/${id}`);
};
