import React from "react";
import { makeStyles } from "@material-ui/styles";
import * as Icons from "@material-ui/icons/";
import {
  IconButton,
  Drawer,
  ClickAwayListener,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Typography,
  Fab,
} from "@material-ui/core";
import menuIcon from "../../images/baseline-menu-24px.svg";
import { Avatar } from "@material-ui/core";
import { useState } from "react";

const styles = makeStyles((theme) => ({
  container: {
    width: "4.166vw",
    height: "100vh",
  },
  sidebar: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },
  avatar: {
    position: "fixed",
    bottom: "3vh",
  },

  list: {
    height: "100%",
    width: "24.7916vw",
    display: "flex",
    flexDirection: "column",

    backgroundColor: theme.palette.secondary.main,
  },
  listItemText: {
    fontSize: "0.88rem",
    color: "#FFFFFF",
    cursor: "pointer",
    paddingLeft: "1vw",
  },
  ListBottom: {
    display: "flex",
  },
}));

function DrawerSection(props) {
  const [sidebar, setSidebar] = useState(false);
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebar(!sidebar);
  };
  const classes = styles();

  const list = () => (
    <div style={{ height: "100%" }}>
      <List className={classes.list} style={{ padding: "0px" }}>
        <ListItem style={{ padding: "0" }}>
          <div className={classes.drawerButton}>
            <IconButton color="secondary" onClick={toggleDrawer()}>
              <img
                src={menuIcon}
                alt=""
                style={{ width: "4vw", height: "5.5vh" }}
              />
            </IconButton>
          </div>
        </ListItem>
        <Divider />
        <ListItem
          style={{
            flex: "1",
            marginTop: "3vh",
            alignItems: "flex-start",
          }}
        >
          <ListItemIcon>
            <Icons.ArrowBack
              onClick={toggleDrawer()}
              style={{
                cursor: "pointer",
                paddingLeft: "1vw",
                color: "#FFFFFF",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Switch Back to Enterprise UI"
            className={classes.listItemText}
          />
        </ListItem>
        <ListItem className={classes.ListBottom}>
          <ListItemIcon style={{ minWidth: "3vw" }}>
            <Avatar style={{ width: "2.5vw", height: "5vh" }}>NV</Avatar>
          </ListItemIcon>
          <Typography style={{ color: "white", flex: 1 }}>
            Nag Varun Kondreddy
          </Typography>
          <Fab
            style={{
              width: "7vw",
              height: "4.44vh",
              borderRadius: "2.2vw",
              color: "white",
              backgroundColor: "#2D4250",
            }}
          >
            Logout
          </Fab>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.drawerButton}>
          <IconButton
            color="secondary"
            style={{ opacity: 1 }}
            onClick={toggleDrawer()}
          >
            <img
              style={{ width: "4vw", height: "5.5vh" }}
              alt="menu-icon"
              src={menuIcon}
            />
          </IconButton>
        </div>
        <div className={classes.avatar}>
          <Avatar style={{ width: "5vh", height: "5vh" }}>NV</Avatar>
        </div>
      </div>
      <div>
        <Drawer open={sidebar}>
          <ClickAwayListener onClickAway={toggleDrawer()}>
            {list()}
          </ClickAwayListener>
        </Drawer>
      </div>
    </div>
  );
}

export default DrawerSection;
