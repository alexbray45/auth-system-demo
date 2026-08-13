import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { type = "text", placeholder, value, onChange, name },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
});

export default Input;
