import classes from "./Sidebar.module.css";
import SidebarLink from "./SidebarLink";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider } from "@mui/material";

function Sidebar(props) {
  return (
    <nav>
      <div className={classes.sidebar}>
        <div className={classes.title}>COMMFLEA</div>
        <Divider color="#FFFFFF" sx={{ borderBottomWidth: 3 }} />
        <div className={classes.nav}>
          <SidebarLink text="Community" icon={PeopleAltIcon} />
          <SidebarLink text="Store" icon={ShoppingBagIcon} />
          <SidebarLink text="Logout" icon={LogoutIcon} />
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
