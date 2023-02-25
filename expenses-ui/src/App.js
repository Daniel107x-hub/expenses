import './App.css';
import React, {useEffect, useState} from 'react';
import Expense from './components/Expenses/Expense';
import Card from './components/UI/Card';
import Nav from './components/UI/Nav';
import { getExpenses } from './requests/ExpensesRequest';

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
  useEffect(()=>{
    getExpenses()
    .then(data => {
      setExpenses(data.data._embedded.expenses);
      // setExpenses(data.data);
    })
    .catch(e => {
      console.log(e);
    });
  }, []);
  return (
    <div className="App">
      <Nav/>
      <main className='flex justify-center'>
        <Card className='bg-red-300 flex-col space-y-5 p-5 w-1/2 mt-10'>
          {
            expenses.map(expense => <Expense expense={expense} key={expense.value}/>)
          }
        </Card>
      </main>
    </div>
  );
}

export default App;
