import { useContext } from "react";
import MenuItem from "./MenuItem";
import Context from "./Context";

function Menu() {
  const links = useContext(Context);
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
