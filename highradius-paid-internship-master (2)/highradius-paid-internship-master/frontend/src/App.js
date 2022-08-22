import { withStyles } from "@material-ui/styles";
import CallWorkboard from "./components/CallWorkboard/CallWorkboard";
import DrawerSection from "./components/DrawerSection/DrawerSection";

const styles = {
  app: {
    display: "flex",
  },
};

function App(props) {
  return (
    <div className={props.classes.app}>
      <DrawerSection />
      <CallWorkboard />
    </div>
  );
}

export default withStyles(styles)(App);
