import { useState } from "react";
import { addExpense } from "../../requests/ExpensesRequest";
import Button from "../UI/Button";

const NewExpense = (props) =>{
    const [value, setValue] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dateApplied, setDateApplied] = useState(new Date().toISOString().slice(0, 10));

    const handleSubmit = () =>{
      const expense = {value, name, description, dateApplied: dateApplied};
      console.log(expense);
      addExpense(expense)
        .then(response => {
            props.onResult(true);
        })
        .catch(e => {
            console.log(e);
            props.onResult(false);
        })
    }

    return(
        <div className="form-container p-6">
            <form className="modal-form flex flex-col content-between text-black p-3">
                <input type="number" name="value" id="value" placeholder="Amount" className="mb-3 p-1 border-none rounded-md shadow-sm text-slate-600 outline-none" value={value} onChange={e => setValue(e.target.value)}/>
                <input type="text" name="name" id="name" placeholder="Name" className="mb-3 p-1 border-none rounded-md shadow-sm text-slate-600 outline-none" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" name="description" id="description" placeholder="Description" className="mb-3 p-1 border-none rounded-md shadow-sm text-slate-600 outline-none" value={description} onChange={e => setDescription(e.target.value)}/>
                <input type="date" name="date" id="date" placeholder="Date" className="mb-3 p-1 border-none rounded-md shadow-sm text-slate-600 outline-none" value={dateApplied} onChange={e => setDateApplied(e.target.value)}/>
                <Button text="Submit" onClick={handleSubmit} className="text-red-600"/>
            </form>
        </div>
    )
}

export default NewExpense;