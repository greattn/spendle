import { InputHTMLAttributes } from "react";

type Size = "sm" | "md" | "lg";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "primary" | "secondary" | "outline";
  size?: Size;
}

export function Input({
  className,
  variant = "primary",
  size = "md",
  ...props
}: InputProps) {
  return (
    <input className={`input ${variant} ${size} ${className}`} {...props} />
  );
}
