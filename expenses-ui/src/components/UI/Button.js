import React from "react";

function Button(props) {
  return (
    <div
      className={`button bg-slate-50 flex items-center leading-none h-9 text-md px-4 py-5 rounded-lg hover:cursor-pointer hover:bg-slate-100 justify-center ${props.className}`}
      onClick={props.onClick}
    >
      <p>{props.text}</p>
    </div>
  );
}

export default Button;
