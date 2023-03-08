import React from "react";
import ReactPortal from "./ReactPortal";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

function Modal({ children = null, isOpen, handleClose = null }) {
  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="fixed bg-black/70 flex flex-col items-center justify-center overflow-hidden z-999 inset-0">
        <div className="content relative w-1/3 bg-slate-500 text-white flex items-center justify-center text-md rounded-lg">
          <div className="close-container absolute flex items-end justify-end justify-items-end top-0 right-0 p-2 bg-slate-100 rounded-bl-lg rounded-tr-lg hover:cursor-pointer hover:bg-red-100" onClick={handleClose}>
            <IconContext.Provider value={{className:"text-red-600"}}>
              <MdClose/>
            </IconContext.Provider>
          </div>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
}

export default Modal;
