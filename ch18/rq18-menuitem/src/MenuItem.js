function MenuItem({ href, label }) {
  return (
    <li>
      <a href={href} title={label}>
        {label}
      </a>
    </li>
  );
}

export default MenuItem;
