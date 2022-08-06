import React, { FC, ReactNode, useEffect, useState } from "react";
import "./index.css";

type Props = {
  type?: "button" | "submit" | "reset";
  title?: string;
  icon?: ReactNode;
  handleClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const defaultProps = {
  title: "button",
  icon: null,
  disabled: false,
};

const Button: FC<Props> = ({
  title,
  icon,
  handleClick,
  type,
  className,
  disabled,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOnClick = () => {
    console.log(isDisabled);
    if (!isDisabled) {
      setIsDisabled(true);
      if (handleClick) {
        handleClick();
      }
      setTimeout(() => {
        setIsDisabled(false);
      }, 1000);
    }
  };
  useEffect(() => {
    console.log("disabled", isDisabled);
  }, [isDisabled]);

  return (
    <button
      disabled={isDisabled}
      className={`button ${className}`}
      onClick={handleClick ? handleOnClick : undefined}
      type={type}
    >
      <span className="button-title">{title}</span>
      <span className="button-icon">{icon}</span>
    </button>
  );
};
Button.defaultProps = defaultProps;
export default Button;
