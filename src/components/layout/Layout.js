import classes from "./Layout.module.css";
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";

//left contains navbar
//right contains topbar & main content

function Layout(props) {
  return (
    <div className={classes.wrapper}>
      <div classname={classes.left}>
        <Sidebar />
      </div>
      <div classname={classes.right}>
        <div className={classes.topbar}>
          <Appbar />
        </div>
        <div classname={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
