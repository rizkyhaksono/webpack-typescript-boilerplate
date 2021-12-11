import classNames from "classnames";
import { FC, ButtonHTMLAttributes } from "react";
import buttonStyles from "./style.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}

export const Button: FC<ButtonProps> = ({
  size = "medium",
  children,
  ...props
}) => {
  return (
    <button className={classNames(buttonStyles.button)} {...props}>
      {children}
    </button>
  );
};
