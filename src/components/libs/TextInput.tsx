import React from "react";

type InputType = "email" | "text" | "password";

type TextInputProps = {
  label?: string;
  placeholder?: string;
  type: InputType;
  value: string;
  onChange?: () => void;
};

export const TextInput = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  ...props
}: TextInputProps & any) => {
  return (
    <div className="flex-1">
      <label className="block">
        {label && (
          <span className="block text-sm font-medium text-white">{label}</span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="text-input"
          {...props}
        />
      </label>
    </div>
  );
};
