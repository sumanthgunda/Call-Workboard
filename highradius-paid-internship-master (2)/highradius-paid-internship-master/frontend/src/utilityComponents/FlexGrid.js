import React from "react";
import { withStyles } from "@material-ui/core";

const style = {
  rootColumn: {
    display: "flex",
    flexDirection: "column",
  },
  rootRow: {
    display: "flex",
  },
  row: {
    display: "flex",
    flexGrow: 1,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
};

function FlexGrid(data, getComponent, classes, spacing) {
  const layoutType = data.alignment === "horizontal" ? "row" : "column";
  const nestedData = data.content;
  return (
    <div
      key={Math.random(100)}
      className={
        layoutType === "row"
          ? data.root
            ? classes.rootRow
            : classes.row
          : data.root
          ? classes.rootColumn
          : classes.column
      }
      style={{
        width: data.width,
        height: data.height,
        margin: data.root ? -spacing / 2 : "",
      }}
    >
      {nestedData &&
        nestedData.map((cardData, id) => {
          return !cardData.content ? (
            <div
              key={id}
              //   className={
              //     layoutType === "row" ? classes.columnInRow : classes.rowInColumn
              //   }
              style={{
                boxSizing: "border-box",
                height: cardData.height,
                width: cardData.width,
                padding: spacing / 2,
              }}
            >
              {cardData.component ? getComponent(cardData.component) : ""}
            </div>
          ) : (
            FlexGrid(cardData, getComponent, classes, spacing)
          );
        })}
    </div>
  );
}

function RecFlexGrid(props) {
  const { classes, getComponent, layoutConfiguration } = props;

  const spacing = layoutConfiguration.spacing;

  return FlexGrid(layoutConfiguration, getComponent, classes, spacing);
}

export default withStyles(style)(RecFlexGrid);
