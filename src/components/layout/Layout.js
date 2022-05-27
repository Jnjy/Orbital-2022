import classes from "./Layout.module.css";
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";

function Layout(props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.TopBar}>
        <Appbar />
      </div>
      <div className={classes.center}>
        <div classname={classes.sidebar}>
          <Sidebar />
        </div>
        <main classname={classes.content}>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
