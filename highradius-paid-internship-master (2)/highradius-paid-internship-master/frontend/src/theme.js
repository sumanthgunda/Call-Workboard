import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#FFFFFFA6",
      dark: "#273D49BF",
    },

    secondary: {
      main: "#5DAAE0",
    },
  },
  overrides: {
    MuiDrawer: {
      // paper: {
      //   top: "12",
      //   height: "86.2vh",
      // },
      paperAnchorDockedRight: {
        borderLeft: "0.13rem solid none",
        borderTop: "0.13rem solid #FC7500",
      },
    },
    MuiTabs: {
      root: {
        minHeight: "4.44vh",
      },
      fixed: {
        marginLeft: "0.7rem",
      },
    },

    MuiTab: {
      root: {
        minHeight: "4.44vh",
        minWidth: "16vw !important",
      },
      wrapper: {
        padding: "2%",
      },
    },
    MuiTypography: {
      tabtextbig: {
        textAlign: "left",
        opacity: "1",
        fontSize: "1.33rem",
        lineHeight: "1.066rem",
        color: "#FFFFFF",
        letterSpacing: "0.0475rem",
      },
    },
    MuiCardContent: {
      root: {
        padding: "0",
      },
    },
    MuiCardHeader: {
      root: {
        padding: "0.71rem",
      },
    },
    MuiMobileStepper: {
      dot: {
        backgroundColor: "#5daae0",
      },
    },
  },
});

export default theme;
