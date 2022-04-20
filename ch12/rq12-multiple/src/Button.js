import { memo } from 'react';

function Button({ icon, label, ...rest }) {
  return (
    <button title={label} className="toggle" {...rest}>
      <img src={`/icons/${icon}.svg`} alt={label} />
    </button>
  );
};

export default memo(Button);