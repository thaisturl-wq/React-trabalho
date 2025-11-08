import { Input } from "./style"

export function InputComponent({ type, placeholder, value, onChange}) {
  return (
    <Input
      type={type}
      id={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
    />
  );
}
