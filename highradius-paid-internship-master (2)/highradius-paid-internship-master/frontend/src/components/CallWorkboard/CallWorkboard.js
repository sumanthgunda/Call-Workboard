import React, { useEffect, useState } from "react";
import FreedaDrawer from "../DrawerSection/FreedaDrawer";
import { withStyles } from "@material-ui/styles";
import HeaderSection from "./HeaderSection";
import clsx from "clsx";
import TabSummary from "./TabSummary";
import FooterSection from "./FooterSection";
import HomePage from "../../views/HomePage";
import { Divider, Fab } from "@material-ui/core";
import getUserCallWorkbookData from "../../api/getUserCallWorkbookAPI";
import { CircularProgress } from "@material-ui/core";
import getUpcomingSummary from "../../api/getUpcomingSummaryAPI";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import getSearchResults from "../../api/getSearchResults";

const drawerWidth = 21;
const styles = (theme) => ({
  workboard: {
    width: "100%",
    height: "100vh",
    background:
      "transparent radial-gradient(closest-side at 50% 50%, #58687E 0%, #39495E 100%) 0% 0% no-repeat padding-box",
    opacity: "1",
  },
  persistentDrawerContent: {
    width: "100%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  persistentDrawerContentShift: {
    width: `calc(100% - ${drawerWidth}vw)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  homepage: {
    height: "80vh",
    width: "100%",
  },
  fabNext: {
    position: "absolute",
    right: "1.7%",
    top: "54%",
    width: "2rem",
    height: "2rem",
    backgroundColor: "#5DAAE0",
    color: "white",
    cursor: "pointer",
    "&:disabled": {
      backgroundColor: "trasparent",
      color: "grey",
    },
  },
  fabNextWithFreeda: {
    position: "absolute",
    right: "22.5%",
    top: "54%",
    width: "2rem",
    height: "2rem",
    backgroundColor: "#5DAAE0",
    color: "white",
    cursor: "pointer",
  },
  fabPrev: {
    position: "absolute",
    top: "54%",
    width: "2rem",
    height: "2rem",
    left: "5%",
    backgroundColor: "#5DAAE0",
    cursor: "pointer",
    color: "white",
    "&:disabled": {
      backgroundColor: "trasparent",
      color: "grey",
    },
  },
});
export const drawerValueContext = React.createContext();

function CallWorkboard(props) {
  const classes = props.classes;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(false);
  const [sixthCardData, setSixthCardData] = useState({});
  const [pageNum, setPageNum] = useState(0);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getUserCallWorkbookData(pageNum);

      setData(response);
    }
    async function fetchSixthData() {
      const response = await getUpcomingSummary();

      setSixthCardData(response);
      setTimeout(()=>{
        setIsLoading(false);
      },2000)
     
    }
    fetchData();
    fetchSixthData();
  }, [pageNum]);

  const increasePageNum = () => {
    setPageNum((value) => value + 1);
  };

  const decreasePageNum = () => {
    setPageNum((value) => value - 1);
  };

  const getSearchInput = async (event) => {
    const response = await getSearchResults(event.target.value);
    if (response.total === 6) {
      setSearchData(null);
    } else {
      setSearchData(response);
    }
  };

  if (isLoading) {
    return (
      <div className={classes.workboard}>
        <HeaderSection />
        {/* <div style={{ position: "relative", left: "43%", top: "32%" }}>
          <CircularProgress color="secondary" size="8rem" />
        </div> */}
        <div className={classes.homepage}>
        <drawerValueContext.Provider value={value}>
                <HomePage
                  data={{}}
                  data1={{}}
                />
              </drawerValueContext.Provider>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.workboard}>
        <HeaderSection
          getSearchInput={getSearchInput}
          drawerValue={value}
          drawerSetValue={setValue}
        />
        <div
          style={{ width: "100%", height: "89%", flex: "1", display: "flex" }}
        >
          <div
            className={clsx(classes.persistentDrawerContent, {
              [classes.persistentDrawerContentShift]: value,
            })}
          >
            <TabSummary
              searchResult={searchData}
              total={searchData && searchData.total}
              data={data && data.overview}
            />
            <div id="cardsContainer" className={classes.homepage}>
              <Fab
                disabled={pageNum === 2 ? true : false}
                className={clsx({
                  [classes.fabNext]: value === false,
                  [classes.fabNextWithFreeda]: value === true,
                })}
                onClick={increasePageNum}
              >
                <NavigateNext />
              </Fab>
              <Fab
                disabled={pageNum === 0 ? true : false}
                onClick={decreasePageNum}
                className={classes.fabPrev}
              >
                <NavigateBefore />
              </Fab>
              <drawerValueContext.Provider value={value}>
                <HomePage
                  data={searchData ? searchData.customer : data.workbookItems}
                  data1={searchData ? null : sixthCardData}
                />
              </drawerValueContext.Provider>
            </div>
          </div>
          {value === true && (
            <div
              style={{
                flex: "0",
                height: "97.5%",
                backgroundImage:
                  "linear-gradient(rgb(95, 93, 93),silver,rgb(95, 93, 93))",
              }}
            >
              <Divider
                style={{
                  border: "0.05rem solid transparent",
                }}
              />
            </div>
          )}
          <div>
            <FreedaDrawer drawerValue={value} drawerSetValue={setValue} />
          </div>
        </div>
        <FooterSection pageNum={pageNum} />
      </div>
    );
  }
}

export default withStyles(styles)(CallWorkboard);
