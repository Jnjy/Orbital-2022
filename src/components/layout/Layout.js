import styles from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import { Typography } from "@mui/material";

//left contains navbar
//right contains topbar & main content

function Layout(props) {
  const { pageName } = props;

  return (
    <>
      <NavBar />
      <div className={styles.caption}>
        <Typography  variant="h2">{ pageName }</Typography>
      </div> 
      <div className={styles.content}>{props.children}</div>
    </>
  );
}

export default Layout;
