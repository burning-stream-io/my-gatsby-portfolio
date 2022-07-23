import React, { FC } from "react";
import ReactModal from "react-modal";
import "./index.css";

type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

ReactModal.setAppElement(`#___gatsby`);

const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="modal-content"
      contentLabel="Modal"
      closeTimeoutMS={200}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
