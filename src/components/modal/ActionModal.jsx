import { NavLink } from "react-router-dom";

const ActionModal = ({ menu = [] }) => {
  return (
    <div>
      {menu.map((mnu) => (
        <NavLink key={mnu.to}>{mnu.label}</NavLink>
      ))}
    </div>
  );
};

export default ActionModal;
