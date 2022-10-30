import MenuItem from "./MenuItem";
import { useData } from "./Context";

function Menu() {
  const { links } = useData();
  return (
    <nav>
      <ul className="menu">
        {links.map(({ title, ...props }) => (
          <MenuItem key={title} {...props}>
            {title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
