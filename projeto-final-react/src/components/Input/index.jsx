export function InputComponent({ type, placeholder, value, onChange, event}) {
  return (
    <form onSubmit={event}>
    <input
      type={type}
      id={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
    />
    </form>
  );
}
