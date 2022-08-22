import { Drawer, List, ListItem, Typography, Divider } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { withStyles } from "@material-ui/styles";
import FreedaCloseIcon from "../../images/Group 1222.svg";
import FreedaIcon from "../../images/Group1206.svg";

const styles = {
  freedaDrawerTitle: {
    textAlign: "left",
    font: "normal normal normal 1.06rem/1.28rem ",
    color: "#FFFFFF",
    opacity: 0.65,
  },
  freedaDrawerText: {
    textAlign: "left",
    font: "normal normal normal 0.88rem/1.06rem ",
    color: "#FFFFFF",
    opacity: 1,
  },

  reduceHeight: {
    top: "3.3rem",
    height: "86.2vh",
  },
};

function FreedaDrawer(props) {
  const classes = props.classes;

  const list = () => (
    <List
      style={{
        padding: "0px",
        backgroundColor: "#2D4250",
        height: "100%",
        width: "20vw",
      }}
    >
      <ListItem
        style={{
          padding: "0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            padding: "1vw",
          }}
          className={classes.freedaDrawerTitle}
        >
          FREEDA
        </Typography>
        <img
          onClick={() => props.drawerSetValue(!props.drawerValue)}
          src={FreedaCloseIcon}
          alt="FreedaCloseIcon"
          style={{
            width: "1.4vw",
            height: "2.5vh",
            padding: "0.75vw",
            cursor: "pointer",
          }}
        ></img>
      </ListItem>
      <Divider />
      <ListItem>
        <div>
          <img
            src={FreedaIcon}
            alt="FreedaIcon"
            style={{ width: "1.89vw", height: "3.37vh" }}
          ></img>
        </div>
        <Typography
          className={classes.freedaDrawerText}
          style={{ paddingLeft: ".5rem" }}
        >
          Hi NagVarun,
          <br /> how can I help you?
        </Typography>
      </ListItem>
    </List>
  );

  return (
    <div className="FreedaDrawer">
      <Drawer
        classes={{ paper: classes.reduceHeight }}
        anchor="right"
        variant="persistent"
        open={props.drawerValue}
      >
        {list()}
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(FreedaDrawer);
