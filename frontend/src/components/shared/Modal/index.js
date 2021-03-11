import React from "react";
import ReactDom from "react-dom";
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalCloseIcon,
} from "./ModalStyles";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <ModalOverlay />
      <ModalContainer>
        <ModalContent>
          <ModalCloseIcon onClick={onClose} size={25} />
          {children}
        </ModalContent>
      </ModalContainer>
    </>,
    document.getElementById("portal")
  );
}
