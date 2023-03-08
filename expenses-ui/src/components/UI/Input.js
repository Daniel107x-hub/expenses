import React from "react";

function Input({
  type,
  name,
  id,
  min,
  max,
  step,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="input-form flex flex-col">
      <label htmlFor={id} className="text-white capitalize mb-1 text-sm">
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        min={min}
        max={max}
        placeholder={placeholder}
        step={step}
        className="mb-3 p-1 border-none rounded-md shadow-sm text-slate-600 outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
