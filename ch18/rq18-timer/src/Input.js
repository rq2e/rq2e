function Input({ name, value, ...rest }) {
  return (
    <li className="part">
      <input
        className="number"
        type="number"
        value={String(value).padStart(2, "0")}
        name={name}
        id={name}
        min={0}
        {...rest}
      />
      <label className="unit" htmlFor={name}>
        {name}
      </label>
    </li>
  );
}

export default Input;
