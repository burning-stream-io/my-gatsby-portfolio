import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { isBrowser } from "../../utilities";

type Props = {
  children: ReactNode;
};
const Portal: FC<Props> = ({ children }) => {
  const portal = isBrowser() ? document.getElementById("portal") : null;
  return portal ? ReactDOM.createPortal(children, portal) : null;
};
export default Portal;
