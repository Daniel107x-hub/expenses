import "./App.css";
import React, { useEffect, useState } from "react";
import Expense from "./components/Expenses/Expense";
import Card from "./components/UI/Card";
import Nav from "./components/UI/Nav";
import Button from "./components/UI/Button";
import { getExpenses, deleteExpense } from "./requests/ExpensesRequest";
import Modal from "./components/UI/Modal";
import NewExpense from "./components/Expenses/NewExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateExpenses = () => {
    getExpenses()
      .then((data) => {
        setExpenses(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    updateExpenses();
  }, []);

  const handleResult = (success) => {
    setIsModalOpen(false);
    updateExpenses();
  };

  const onDelete = (id) => {
    deleteExpense(id)
      .then((response) => {
        updateExpenses();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <Nav />
      <main className="flex justify-center flex-col items-center">
        <Button text="New expense" onClick={() => setIsModalOpen(true)} />
        <Card className="bg-slate-300 flex-col space-y-5 p-5 w-1/2 mt-2">
          {expenses.map((expense) => (
            <Expense
              expense={expense}
              key={expense.id}
              onDelete={(e) => onDelete(expense.id)}
            />
          ))}
        </Card>
        <Modal handleClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
          <NewExpense onResult={handleResult} />
        </Modal>
      </main>
    </div>
  );
}

export default App;
