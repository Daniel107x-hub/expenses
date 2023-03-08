import "./App.css";
import React, { useEffect, useState } from "react";
import Expense from "./components/Expenses/Expense";
import Card from "./components/UI/Card";
import Nav from "./components/UI/Nav";
import Button from "./components/UI/Button";
import { getExpenses } from "./requests/ExpensesRequest";
import Modal from "./components/UI/Modal";

// const expenses = [
//   {
//     id: 1,
//     value: 14.50,
//     name: 'Expense 1',
//     date: '2023-02-23T00:00:00.000',
//     description: 'Test expense 1'
//   },
//   {
//     id: 2,
//     value: 24.50,
//     name: 'Expense 2',
//     date: '2023-02-23T00:00:00.000',
//     description: 'Test expense 2'
//   },
//   {
//     id: 3,
//     value: 34.50,
//     name: 'Expense 3',
//     date: '2023-02-23T00:00:00.000',
//     description: 'Test expense 3'
//   },
//   {
//     id: 4,
//     value: 44.50,
//     name: 'Expense 4',
//     date: '2023-02-23T00:00:00.000',
//     description: 'Test expense 4'
//   },
// ]

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    getExpenses()
      .then((data) => {
        setExpenses(data.data._embedded.expenses);
        // setExpenses(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const addExpense = () => {
    console.log("Add new expense");
  };

  return (
    <div className="App">
      <Nav />
      <main className="flex justify-center flex-col items-center">
        <Card className="bg-slate-300 flex-col space-y-5 p-5 w-1/2 mt-10 mb-5">
          {expenses.map((expense) => (
            <Expense expense={expense} key={expense.value} />
          ))}
        </Card>
        <Button text="New expense" onClick={addExpense} />
        <button onClick={() => setIsModalOpen(true)}>
          Click to open modal
        </button>
        <Modal handleClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
      </main>
    </div>
  );
}

export default App;
