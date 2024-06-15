import { TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError | undefined;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <label className="flex flex-col flex-1">
        {label}
        <textarea
          data-input="form"
          {...rest}
          ref={ref}
          className={`py-2 px-4 rounded-xl border-[3px] text-primary ${
            error && "border-failure outline-failure resize-none"
          }`}
        />
        {error && <p className="text-xs text-failure mt-1">{error.message}</p>}
      </label>
    );
  }
);

export default Textarea;
