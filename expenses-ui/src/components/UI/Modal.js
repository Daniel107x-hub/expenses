import React from "react";
import ReactPortal from "./ReactPortal";

function Modal({ children = null, isOpen, handleClose = null }) {
  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="transition-all ease-in-out duration-300 fixed bg-black/60 flex flex-col items-center justify-center overflow-hidden z-999 inset-0">
        <button onClick={handleClose}>Close me!</button>
        <div className="content w-1/4 h-1/4 bg-slate-500 text-white flex items-center justify-center text-md">
          Modal content
        </div>
      </div>
    </ReactPortal>
  );
}

export default Modal;
