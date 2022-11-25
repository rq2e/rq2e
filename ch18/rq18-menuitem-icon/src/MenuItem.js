function MenuItem({ href, label }) {
  return (
    <li>
      <a href={href} title={label}>
        <img src="/images/link.png" alt="" />
        {label}
      </a>
    </li>
  );
}

export default MenuItem;
