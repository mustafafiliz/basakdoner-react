import React from "react";

type Props = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  className?: string;
};

const TextArea = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  rows = 4,
  maxLength,
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
      <textarea
        className={`
          px-3 py-2 
          border border-gray-300 
          rounded-md 
          resize-none
          focus:outline-none 
          text-sm
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        maxLength={maxLength}
      />
      {maxLength && (
        <div className="text-xs text-gray-500 text-right">
          {value.length}/{maxLength}
        </div>
      )}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default TextArea;
