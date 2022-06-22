import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DesktopView from "./views/DesktopView";
import MobileView from "./views/MobileView";

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopView />
          <MobileView />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
