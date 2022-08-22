import React, { useContext, useEffect, useState } from "react";
import { Divider, withStyles } from "@material-ui/core";
import { Card, CardHeader, Typography, CardContent } from "@material-ui/core";
import Highchart from "./HighChart";
import NotBrokenIcon from "../../images/Symbol 331.svg";
import BrokenIcon from "../../images/Symbol 341.svg";
import clsx from "clsx";
import { drawerValueContext } from "../CallWorkboard/CallWorkboard";
import { Autorenew } from "@material-ui/icons";

const style = {
  CardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "7.5vh",
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  CardIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.5vw",
  },
  cardTitle: {
    fontSize: "1.33rem",
    lineHeight: "1.64rem",
    textAlign: "left",
    letterSpacing: "0px",
    color: "#FFFFFF80",
    opacity: 1,
  },
  cardCustId: {
    fontSize: "0.8rem",
    lineHeight: "0.97rem",
    textAlign: "right",
    color: "#FFFFFF80",
    opacity: 1,
  },
  brokenPromises: {
    textAlign: "center",
    fontSize: "1.77rem",
    lineHeight: "2.13rem",
    letterSpacing: "0px",
    color: "#FFFFFF",
    opacity: 1,
  },
  promicesText: {
    textAlign: "center",
    fontSize: "0.88rem",
    lineHeight: "1.06rem",
    letterSpacing: "0px",
    color: "#FFFFFF80",
    opacity: 1,
  },
  highChartSize: {
    height: "30vh",
    width: "23.658vw",
  },
  changedHighChartSize: {
    width: "18.658vw",
    height: "30vh",
  },
  loadingGradient:{
    height:'10rem',
    backgroundImage:'linear-gradient( 190deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),linear-gradient( #FFFFFF1A 15rem, transparent 0 )',
    width:'17%',
    backgroundPosition:'0 3rem,0 3rem',
    animation:'shine 1s infinite',
    backgroundRepeat:'no-repeat',
    backgroundSize:'3rem 2rem,3rem'

  },
  loadingGradient1:{
    height:'1.4rem',
    backgroundImage:'linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),linear-gradient( #FFFFFF1A 12rem  , transparent 0 )',
    width:'12rem',
    backgroundPosition:'0.5rem 0,0.5rem 0',
    animation:'shine1 1s infinite',
    backgroundRepeat:'no-repeat',
    backgroundSize:'3rem 1.4rem,12rem 1.4rem',
  },
  loadingGradient2:{
    height:'1.4rem',
    backgroundImage:'linear-gradient( 100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80% ),linear-gradient( #FFFFFF1A 8rem  , transparent 0 )',
    width:'8rem',
    backgroundPosition:'0.5rem 0,0.5rem 0',
    animation:'shine1 1s infinite',
    backgroundRepeat:'no-repeat',
    backgroundSize:'3rem 1.4rem,8rem 1.4rem',
  },
  dividerCss:{
    backgroundColor:"#FFFFFF1A",
    width:'0.2rem',
    height:'11.2rem',
    opacity:'0.3'

  }
};

function FirstCard(props) {
  const { data } = props;
  const classes = props.classes;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  let totalData = 0;
  let cardIcon = null;
  let promicesText = null;
  if(!(Object.keys(data).length === 0)){
    totalData = data.totalCurrentOpenAmount;
    for (let i = 0; i < data.pastDueBucketDocumentAmount.length; i++) {
      totalData += data.pastDueBucketDocumentAmount[i];
    }

    if (data.totalBrokenPromises && data.totalBrokenPromises > 0) {
      cardIcon = BrokenIcon;
      promicesText = "Broken Promises";
    } else {
      cardIcon = NotBrokenIcon;
      promicesText = "No Broken Promises";
    }
  }

  function reportWindowSize() {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }

  const freedaDrawerValue = useContext(drawerValueContext);

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);

  return (
    <div>
      <Card
        style={{
          height: "100%",
          background: "#273D49BF",
        }}
      >
        <div className={classes.CardHeader}>
         {(Object.keys(data).length === 0) ? <div className={classes.loadingGradient1}></div> : <CardHeader
            title={
              <Typography className={classes.cardTitle}>
                {data.customerName}
              </Typography>
            }
          />  }
         { (Object.keys(data).length === 0) ? <div className={classes.loadingGradient2}></div> : <Typography
            className={classes.cardCustId}
            style={{ marginRight: "1vw" }}
          >
            {data.customerNumber}
          </Typography> }
        </div>
        <div className={classes.CardContent}>
          <CardContent>

            <div
            
              className={clsx({
                [classes.highChartSize]: freedaDrawerValue === false,
                [classes.changedHighChartSize]: freedaDrawerValue === true,
              })}
            >
                        {Object.keys(data).length === 0 && <div style={{position:'absolute',
                      width:'20rem',height:'8rem'}}>
                <Autorenew style={{color:'#FFFFFF80',position:'relative',left:'50%',top:'50%'}}/>
                <Typography style={{color:'#FFFFFF80',position:'relative',left:'45%',top:'50%'}}>Loading ...</Typography>
              </div>}

              <Highchart
                id={Math.random().toString()}
                chartData={(Object.keys(data).length === 0 )? [0.1,0.1,0.1,0.1,0.1] : data.pastDueBucketDocumentAmount}
                data={(Object.keys(data).length === 0)? {bucketNames:["1-30","31-60","61-90","91-180","181-360"]} : data}
                totalData={totalData}
                currentDueData={(Object.keys(data).length === 0 )? 0.1 :data.totalCurrentOpenAmount}
                windowWidth={windowWidth && windowWidth}
                windowHeight={windowHeight && windowHeight}
              />
            </div>
          </CardContent>
          <div>
            <Divider
              classes ={{root:classes.dividerCss}}

            />
          </div>
        { (Object.keys(data).length === 0 ) ? <div className={classes.loadingGradient}></div> : <div className={classes.CardIcon}>
            <Typography className={classes.brokenPromises}>              {data.totalBrokenPromises && data.totalBrokenPromises > 0
                ? data.totalBrokenPromises
                : null}</Typography>
            <img
              src={NotBrokenIcon}
              alt="CardIcon"
              style={{ width: "4.63vw", height: "5.23vh" }}
            />
            <Typography
              className={classes.promicesText}
              style={{
                width: "4.37vw",
                height: "6.66vh",
                marginTop: "2.5vh",
              }}
            >
              {promicesText && promicesText}
            </Typography>
          </div>}
        </div>
      </Card>
    </div>
  );
}

export default withStyles(style)(FirstCard);
