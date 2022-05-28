import classes from "./Layout.module.css";
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";

//left contains navbar
//right contains topbar & main content

function Layout(props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <Sidebar />
      </div>
      <div className={classes.right}>
        <div className={classes.topbar}>
          <Appbar pageName={props.pageName} />
        </div>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
