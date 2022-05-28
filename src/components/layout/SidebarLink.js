import classes from "./SidebarLink.module.css";
import { Link } from "react-router-dom";

function SidebarLink(props) {
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
