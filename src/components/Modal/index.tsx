// type Props = {
//   children?: React.ReactNode;
//   isOpen: boolean;
//   onClose?: () => void;
// };
//

import React, { FC, memo } from "react";
import Portal from "../Portal";
import "./index.css";

type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};
const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <Portal>
      {isOpen && (
        <>
          <div className="modal-overlay" onClick={onClose} />
          <div className="modal-container">
            <div className="modal-content">{children}</div>
          </div>
        </>
      )}
    </Portal>
  );
};

export default memo(Modal);
