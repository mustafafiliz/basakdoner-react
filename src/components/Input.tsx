import React from "react";

type Props = {
  label?: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
};

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = "",
}: Props) => {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`
          px-3 py-2 
          border border-gray-300 
          rounded-md
          focus:outline-none 
          text-sm
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
