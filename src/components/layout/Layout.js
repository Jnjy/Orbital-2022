import styles from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

//left contains navbar
//right contains topbar & main content

function Layout(props) {
  const { pageName } = props;
  const navigate = useNavigate();

  const handleBack = () => {
      navigate("/community");
  }

  return (
    <>
      <NavBar />
      <div className={styles.caption}>
        {pageName==="Store" 
          ? (<>
              <Button onClick={handleBack}>Back to Community</Button>
              <br />
            </>)
          : <></>}
        <Typography  variant="h2">{ pageName }</Typography>
      </div> 
      <div className={styles.content}>{props.children}</div>
    </>
  );
}

export default Layout;
