import { createPortal } from "react-dom";
import { useState, useLayoutEffect } from "react";

function ReactPortal({ children, wrapperId = "react-portal-wrapper" }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;
  return createPortal(children, wrapperElement);
}

function createWrapperAndAppendToBody(wrapperId) {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
}

export default ReactPortal;
