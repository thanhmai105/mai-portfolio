type TextAreaProps = {
  label?: string;
  placeholder?: string;
  type: string;
  value: string;
  onChange?: () => void;
};

export const TextArea = ({
  label,
  placeholder,
  type,
  value,
  onChange,
  ...props
}: TextAreaProps & any) => {
  return (
    <div>
      <label className="block">
        {label && (
          <span className="block text-sm font-medium text-white">{label}</span>
        )}
        <textarea
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
