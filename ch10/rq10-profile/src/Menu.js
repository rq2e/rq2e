import MenuItem from './MenuItem';
import { useMenu } from './Context';

function Menu() {
  const { links } = useMenu();
  return (
    <nav>
      <ul className="menu">
        {links.map(({title, ...props}) => (
          <MenuItem key={title} {...props}>{title}</MenuItem>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
