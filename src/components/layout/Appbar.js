import classes from "./Appbar.module.css";
import Avatar from "@mui/material/Avatar";

//Appbar is also the top bar icymi

function Appbar(props) {
  return (
    <div className={classes.top}>
      <div className={classes.pagename}>Pagename</div>
      <div className={classes.user}>
        <div className={classes.username}>Jason</div>
        <div className={classes.avatar}>
          <Avatar>J</Avatar>
        </div>
      </div>
    </div>
  );
}
export default Appbar;
