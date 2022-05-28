import classes from "./Appbar.module.css";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";

import { useAuth } from "../../hooks/useAuth";

//Appbar is also the top bar icymi

function Appbar(props) {
  const { user } = useAuth();

  const [name, setName] = useState("Loading name...");

  const pageName = props.pageName;

  useEffect(() => {
    if (user?.displayName) {
      setName(user.displayName);
    }
  }, [user]);

  //console.log(name);

  return (
    <div className={classes.top}>
      <div className={classes.pagename}>{pageName}</div>
      <div className={classes.user}>
        <div className={classes.username}>{name}</div>
        <div className={classes.avatar}>
          <Avatar>{name.charAt(0)}</Avatar>
        </div>
      </div>
    </div>
  );
}
export default Appbar;
