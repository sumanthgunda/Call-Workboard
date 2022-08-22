import React from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TopHeaderButtonLeft from "../../images/Symbol 5313.svg";
import TopHeaderButtonRight from "../../images/Symbol 5341.svg";
import SearchIcon from "../../images/Symbol 1291.svg";
import { InputBase } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FreedaIcon from "../../images/Group1206.svg";
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "7.4vh",
    justifyContent: "space-between",
  },
  headerCallworkboard: {
    textTransform: "none",
    textAlign: "left",
    letterSpacing: "0px",
    color: "#5DAAE0",
    fontSize: "1.77rem",
    lineHeight: "2.13rem",
    opacity: "1",
  },
  headerTopButton: {
    height: "2.314vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "flex-start",
    background: "#FC7500 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "0px 0px 0.577rem 0.577rem",
    opacity: "1",
  },
  headerTopButtonText: {
    fontSize: "0.622rem",
    lineHeight: "0.755rem",
    color: "white",
    padding: "0 0.5rem",
  },
  HeaderItems: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "15.625vw",
    height: "4.444vh",
    border: "0.092vh solid #5DAAE0",
    borderRadius: "2.2vh",
  },
  button: {
    textAlign: "left",
    letterSpacing: "0px",
    color: "#FFFFFF",
    fontSize: "0.88rem",
    lineHeight: "1.06rem",
    opacity: "1",
  },
};

function HeaderSection(props) {
  const classes = props.classes;

  return (
    <div className={classes.header}>
      <div style={{ flex: "0 0 21vw" }}>
        <Button style={{ padding: "0" }}>
          <ArrowBackIcon style={{ margin: "0 1vw", color: "white" }} />
          <Typography className={classes.headerCallworkboard}>
            Call Workboard
          </Typography>
        </Button>
      </div>
      <div className={classes.headerTopButton}>
        <img
          src={TopHeaderButtonLeft}
          alt="topbutton"
          style={{ height: "2.22vh", width: "0.54vw" }}
        />
        <Typography className={classes.headerTopButtonText}>
          AUTONOMOUS RECEIVABLES
        </Typography>
        <img
          src={TopHeaderButtonRight}
          alt="topbutton"
          style={{ height: "2.22vh", width: "0.54vw" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "25vw",
          alignItems: "center",
        }}
      >
        <div className={classes.HeaderItems}>
          <img
            style={{
              minWidth: "2.5vw",
              height: "4.44vh",
              alignSelf: "center",
              position: "relative",
              right: "0.3vw",
            }}
            src={SearchIcon}
            alt={SearchIcon}
          />
          <InputBase
            placeholder="Search Name"
            style={{
              color: "#FFFFFF80",
              opacity: "100%",
            }}
            onChange={props.getSearchInput}
          />
          <ArrowDropDownIcon color={"secondary"} />
        </div>

        <div style={{ marginRight: "1.04vw" }}>
          <Button
            id="cardResize"
            onClick={() => props.drawerSetValue(!props.drawerValue)}
            style={{
              backgroundColor: "#FC7500",
              width: "7.29vw",
              height: "4.44vh",
              borderRadius: "2vw",
              minWidth: "0px",
              padding: "1.2vh",
            }}
          >
            <Typography className={classes.button}>FREEDA</Typography>
            <img
              src={FreedaIcon}
              alt={FreedaIcon}
              style={{ width: "2.5vw", height: "4.44vh" }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(HeaderSection);
