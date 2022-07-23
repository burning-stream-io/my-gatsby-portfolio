import React, { FC } from "react";
import "./index.css";

type Props = {
  onToggle: () => void;
  toggled: boolean;
};

const Switch: FC<Props> = ({ onToggle, toggled }) => {
  return (
    <button
      onClick={onToggle}
      className={`toggler ${toggled ? "toggled" : ""}`}
    >
      <span className={`swicth ${toggled ? "switched" : ""}`} />
    </button>
  );
};

export default Switch;
