import classes from "./Sidebar.module.css";
import SidebarLink from "./SidebarLink";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar(props) {
  return (
    <div className={classes.sidebar}>
      <h2>COMMFLEA</h2>
      <SidebarLink text="Community" icon={PeopleAltIcon} />
      <SidebarLink text="Store" icon={ShoppingBagIcon} />
      <SidebarLink text="Logout" icon={LogoutIcon} />
    </div>
  );
}

export default Sidebar;
