import React from "react";
import { withStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";

const style = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "1.5vh",
    paddingBottom: "0.3vh",
  },
  footerText: {
    fontSize: "0.88rem",
    lineHeight: "1.06rem",
    textAlign: "left",
    color: "#FFFFFFA6",
  },
};

function FooterSection(props) {
  const classes = props.classes;
  const activeStep = props.pageNum;

  return (
    <div className={classes.footer}>
      <div style={{ marginLeft: "1vw", flex: "0.3" }}>
        <Typography className={classes.footerText}>
          Viewing 1 - 5 of 12
        </Typography>
      </div>
      <div>
        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={activeStep}
          className={classes.root}
        />
      </div>
      <div style={{ marginRight: "1.8vw" }}>
        <Typography className={classes.footerText}>
          © Copyright 2018 HighRadius. All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
}

export default withStyles(style)(FooterSection);
