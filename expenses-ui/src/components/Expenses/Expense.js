import React from 'react'
import Card from '../UI/Card';

function Expense(props) {
    const expense = props.expense;
    const date = new Date(expense.dateApplied);
    return (
        <Card className="mx-10 py-3">
            <div className="expense flex flex-row w-full">
                <section className="info w-1/2 mx-5">
                    <div className="amount text-lg font-semibold text-red-600">${expense.value}</div>
                    <div className="name font-medium">{expense.name}</div>
                    <div className="date text-sm">{date.toLocaleDateString()}</div>
                    <div className="description text-sm">{expense.description}</div>
                </section>
                <section className="actions w-1/2 flex flex-col justify-center">
                    <div className="edit">Edit</div>
                    <div className="delete">Delete</div>
                </section>
            </div>
        </Card>
    )
}

export default Expense