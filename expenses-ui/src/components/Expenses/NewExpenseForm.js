import { useState } from "react";
import { addExpense } from "../../requests/ExpensesRequest";
import Button from "../UI/Button";
import Input from "../UI/Input";

const NewExpense = (props) => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateApplied, setDateApplied] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleSubmit = () => {
    const expense = { value, name, description, dateApplied: dateApplied };
    console.log(expense);
    addExpense(expense)
      .then((response) => {
        props.onResult(true);
      })
      .catch((e) => {
        console.log(e);
        props.onResult(false);
      });
  };

  return (
    <div className="form-container p-6">
      <form className="modal-form flex flex-col content-between text-black p-3">
        <Input
          type="number"
          name="value"
          id="value"
          min={0.0}
          placeholder={0.0}
          step={0.01}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="date"
          name="date"
          id="date"
          placeholder="Date"
          value={dateApplied}
          onChange={(e) => setDateApplied(e.target.value)}
        />
        <Button
          text="Submit"
          onClick={handleSubmit}
          className="text-red-600 hover:bg-red-200 transition-all duration-200"
        />
      </form>
    </div>
  );
};

export default NewExpense;
