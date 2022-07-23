import React, { FC, ReactNode, useRef } from "react";
import "./button.css";
type Props = {
  type?: "button" | "submit" | "reset";
  title?: string;
  icon?: ReactNode;
  onClick?: () => void;
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
  onClick,
  type,
  className,
  disabled,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    console.log("clicked");
    if (buttonRef.current && !buttonRef.current.disabled) {
      buttonRef.current.disabled = true;
      if (onClick) {
        onClick();
      }
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.disabled = false;
        }
      }, 1000);
    }
  };

  return (
    <button
      ref={buttonRef}
      disabled={disabled}
      className={`button ${className}`}
      onClick={onClick ? handleClick : undefined}
      type={type}
    >
      <span className="button-title">{title}</span>
      <span className="button-icon">{icon}</span>
    </button>
  );
};
Button.defaultProps = defaultProps;
export default Button;
