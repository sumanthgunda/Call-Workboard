import React, { useContext, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Highchart from "./HighChart";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { drawerValueContext } from "../CallWorkboard/CallWorkboard";

const useStyles = makeStyles(() => ({
  CardHeader: {
    justifyContent: "space-between",
    alignItems: "center",
    height: "7.87vh",
  },
  cardTitle: {
    fontSize: "1.33rem",
    lineHeight: "1.64rem",
    textAlign: "left",
    letterSpacing: "0px",
    color: "#FFFFFF80",
    opacity: 1,
  },
  CardContent: {
    display: "flex",
  },
  highChartSize: {
    height: "29.65vh",
    width: "31vw",
  },
  changedHighChartSize: {
    width: "24.2vw",
    height: "29.65vh",
  },
}));

export default function SixthCard(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  // console.log(windowWidth);
  const sixthCardData = props.data1;
  const bucketNames = props.data;
  const freedaDrawerValue = useContext(drawerValueContext);
  let totalData = 0;
  totalData = sixthCardData.upcomingOpenAmount;

  for (
    let i = 0;
    i < sixthCardData.upcomingPastDueBucketDocumentAmount.length;
    i++
  ) {
    totalData += sixthCardData.upcomingPastDueBucketDocumentAmount[i];
  }

  function reportWindowSize() {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Card
        style={{
          height: "100%",
          background: "#273D49BF",
        }}
      >
        <div className={classes.CardHeader}>
          <CardHeader
            title={
              <Typography className={classes.cardTitle}>
                Remaining Balance Summary
              </Typography>
            }
          />
        </div>
        <div className={classes.CardContent}>
          <CardContent>
            <div
              className={clsx({
                [classes.highChartSize]: freedaDrawerValue === false,
                [classes.changedHighChartSize]: freedaDrawerValue === true,
              })}
            >
              <Highchart
                id={Math.random().toString()}
                chartData={sixthCardData.upcomingPastDueBucketDocumentAmount}
                currentDueData={sixthCardData.upcomingOpenAmount}
                totalData={totalData}
                data={bucketNames}
                windowWidth={windowWidth && windowWidth}
                windowHeight={windowHeight && windowHeight}
              />
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
