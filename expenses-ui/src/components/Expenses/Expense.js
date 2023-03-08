import React from "react";
import Card from "../UI/Card";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { IconContext } from "react-icons";

function Expense(props) {
  const expense = props.expense;
  const date = new Date(expense.dateApplied);

  return (
    <Card className="mx-10 py-3 hover:bg-slate-200">
      <div className="expense flex flex-row w-full">
        <section className="info w-1/2 mx-5">
          <div className="amount text-lg font-semibold text-red-600">
            ${expense.value}
          </div>
          <div className="name font-medium">{expense.name}</div>
          <div className="date text-sm">{date.toLocaleDateString()}</div>
          <div className="description text-sm">{expense.description}</div>
        </section>
        <section className="actions w-1/2 flex flex-row justify-evenly items-center">
          <IconContext.Provider value={{ size: "1.5em" }}>
            <div className="edit">
              <MdModeEdit />
            </div>
            <div className="delete" onClick={props.onDelete}>
              <IconContext.Provider value={{ className: "text-red-400" }}>
                <MdDelete />
              </IconContext.Provider>
            </div>
          </IconContext.Provider>
        </section>
      </div>
    </Card>
  );
}

export default Expense;
