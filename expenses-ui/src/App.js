import "./App.css";
import React, { useEffect, useState } from "react";
import Expense from "./components/Expenses/Expense";
import Card from "./components/UI/Card";
import Nav from "./components/UI/Nav";
import Button from "./components/UI/Button";
import { getExpenses } from "./requests/ExpensesRequest";
import Modal from "./components/UI/Modal";
import NewExpense from "./components/Expenses/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateExpenses = () =>{
    getExpenses()
      .then((data) => {
        setExpenses(data.data._embedded.expenses);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    updateExpenses();
  }, []);

  const handleResult = (success) =>{
    setIsModalOpen(false);
    updateExpenses();
  }

  return (
    <div className="App">
      <Nav />
      <main className="flex justify-center flex-col items-center">
        <Card className="bg-slate-200 flex-col space-y-5 p-5 w-1/2 mt-10 mb-5">
          {expenses.map((expense) => (
            <Expense expense={expense} key={expense.value + expense.name + expense.date} />
          ))}
        </Card>
        <Button text="New expense" onClick={()=>setIsModalOpen(true)} />
        <Modal handleClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
          <NewExpense onResult={handleResult}/>
        </Modal>
      </main>
    </div>
  );
}

export default App;
