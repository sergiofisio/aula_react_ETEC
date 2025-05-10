export default function Input({
  name,
  texto,
  type,
  value,
  onChange,
  onBlur,
  required,
}) {
  return (
    <div>
      <label htmlFor={name}>{texto}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
    </div>
  );
}
