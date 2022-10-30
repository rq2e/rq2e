import MenuItem from "./MenuItem";

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <MenuItem href="/" icon="home">
          Home
        </MenuItem>
        <MenuItem href="/services" icon="services">
          Services
        </MenuItem>
        <MenuItem href="/pricing" icon="pricing">
          Pricing
        </MenuItem>
        <MenuItem href="/blog" icon="blog">
          Blog
        </MenuItem>
      </ul>
    </nav>
  );
}

export default Menu;
