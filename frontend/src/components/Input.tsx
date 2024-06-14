import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  error?: FieldError | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", error, ...rest }, ref) => {
    return (
      <label data-input="form" className="flex flex-col flex-1">
        {label}
        <input
          type={type}
          {...rest}
          ref={ref}
          className={`py-2 px-4 rounded-xl text-primary ${
            error && "border-failure border-2 outline-failure"
          }`}
        />
        {error && <p className="text-xs text-failure mt-1">{error.message}</p>}
      </label>
    );
  }
);

export default Input;
