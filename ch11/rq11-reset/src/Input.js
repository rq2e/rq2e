function Input({ name, value, ...rest }) {
  return (
    <li className="part">
      <input
        className="number"
        type="number"
        value={String(value).padStart(2, "0")}
        name={name}
        {...rest}
      />
      <p className="unit">{name}</p>
    </li>
  );
}

export default Input;