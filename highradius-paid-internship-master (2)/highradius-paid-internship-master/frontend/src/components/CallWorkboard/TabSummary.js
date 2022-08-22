import { React, useEffect, useState } from "react";
import { withStyles } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  Tab: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "8.2vh",
    justifyContent: "space-between",
    marginTop: "0.3rem",
  },
  TabSummary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "7.407vh",
    width: "39.0625vw",
    marginRight: "2.08vw",
  },
  tabtextbig: {
    textAlign: "left",
    opacity: "1",
    fontSize: "1.33rem",
    lineHeight: "1.066rem",
    color: "#FFFFFF",
    letterSpacing: "0.0475rem",
  },
  tabtext: {
    color: "#FFFFFFA6",
    textAlign: "center",
    fontSize: "1.33rem",
    lineHeight: "1.066rem",
    letterSpacing: "0.0475rem",
  },
  tabtextsmall: {
    textAlign: "center",
    letterSpacing: "0.0315rem",
    lineHeight: "1.066rem",
    fontSize: "0.88rem",
  },
  tabtextsmallwithcolor: {
    color: "#FFFFFFA6",
  },
  subtitle1: {
    textAlign: "center",
    letterSpacing: "0.02844rem",
    color: "#5DAAE0",
    fontSize: "0.8rem",
    lineHeight: "0.97rem",
    opacity: "1",
  },
};

function test(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? Math.abs(Number(labelValue)) / (1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? Math.abs(Number(labelValue)) / (1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(labelValue));
}

function TabSummary(props) {
  const data = props.data;
  const classes = props.classes;
  const [selectedTab, setselectedTab] = useState(0);

  useEffect(() => {
    if (props.searchResult != null) {
      setselectedTab(2);
    } else {
      setselectedTab(0);
    }
  }, [props.searchResult]);
  const handleChange = (event, newValue) => {
    setselectedTab(newValue);
  };
  return (
    <div className={classes.Tab}>
      <div>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            label="TO CALL LIST(12)"
            style={{
              fontSize: "0.88rem",
              lineHeight: "1.06rem",
            }}
          />
          <Tab
            label="FINISHED CALL LIST(12)"
            style={{
              fontSize: "0.88rem",
              lineHeight: "1.06rem",
            }}
            disabled
          />
          {props.searchResult !== null && (
            <Tab
              label={`Search Results (${props.total})`}
              style={{
                color: "#FFFFFFA6",
                fontSize: "0.88rem",
                lineHeight: "1.06rem",
              }}
            />
          )}
        </Tabs>
      </div>
      {props.searchResult == null && (
        <div className={classes.TabSummary}>
          <div>
            {data && (
              <Typography className={classes.tabtextbig}>
                {data.processedCustomerCount}
                <span className={classes.tabtext}>/</span>
                <span
                  className={[
                    classes.tabtextsmall,
                    classes.tabtextsmallwithcolor,
                  ].join(" ")}
                >
                  {data.totalCustomerCount}
                </span>
              </Typography>
            )}

            <div>
              <Typography className={classes.subtitle1}>
                Total Customers Called
              </Typography>
            </div>
          </div>
          <Divider
            flexItem={true}
            style={{ border: ".05rem solid #5DAAE033 " }}
          />
          <div>
            {data && (
              <Typography className={classes.tabtextbig}>
                {Math.floor(data.completedCallingMinutes / 60)}
                <span className={classes.tabtextsmall}>hr </span>
                <span className={classes.tabtextbig}>
                  {data.completedCallingMinutes % 60}
                </span>
                <span className={classes.tabtextsmall}>min</span>
                <span className={classes.tabtext}>/</span>
                <span
                  className={[
                    classes.tabtextsmall,
                    classes.tabtextsmallwithcolor,
                  ].join(" ")}
                >
                  {Math.floor(data.completedCallingMinutes / 60)}
                </span>
                <span
                  className={[
                    classes.tabtextsmall,
                    classes.tabtextsmallwithcolor,
                  ].join(" ")}
                >
                  hr
                </span>
              </Typography>
            )}

            <div>
              <Typography className={classes.subtitle1}>
                Total Time Spent On Call
              </Typography>
            </div>
          </div>
          <Divider
            flexItem={true}
            style={{ border: ".05rem solid #5DAAE033 " }}
          />
          <div>
            {data && (
              <Typography className={classes.tabtextbig}>
                ${data.totalPastDueProcessed}
                <span className={classes.tabtext}>/</span>
                <span
                  className={[
                    classes.tabtextsmall,
                    classes.tabtextsmallwithcolor,
                  ].join(" ")}
                >
                  ${test(data.totalPastDueAmount)}
                </span>
              </Typography>
            )}

            <div>
              <Typography className={classes.subtitle1}>
                Total Past Due Touched
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(TabSummary);
