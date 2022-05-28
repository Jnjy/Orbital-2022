import classes from "./SidebarLink.module.css";
import { NavLink, Link, useLocation } from "react-router-dom";

function SidebarLink(props) {
  const location = useLocation();
  console.log("NANI", props.l);
  return (
    <div className={classes.link} onClick={props.clickEvent}>
      <props.icon className={classes.icon} color="primary" />
      <Link to={props.l}>
        <h2>{props.text}</h2>
      </Link>
    </div>
  );
}
export default SidebarLink;
