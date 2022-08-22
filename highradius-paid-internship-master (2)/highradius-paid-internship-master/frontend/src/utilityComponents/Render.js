import React, { Component } from "react";
import withWidth from "@material-ui/core/withWidth";
import layoutConfig from "../layout-config/layoutConfig.json";
import ComponentGetter from "../utils/component-getter/ComponentGetter";
import FlexGrid from "./FlexGrid";

class Render extends Component {
  constructor(props) {
    super(props);
    this.customerIndex = -1;
  }
  getComponent = (componentId) => {
    if (this.props.data) {
      this.customerIndex += 1;
      if (this.customerIndex > 5) {
        this.customerIndex = 0;
      }

      return (
        <ComponentGetter
          componentId={componentId}
          data={this.props.data && this.props.data}
          index={this.customerIndex}
          data1={this.props.data1 && this.props.data1}
        />
      );
    }
  };

  render() {
    const { width } = this.props;
    const layoutConfigView = layoutConfig["0"][width];
    return (
      <FlexGrid
        layoutConfiguration={layoutConfigView}
        getComponent={this.getComponent}
      />
    );
  }
}

export default withWidth()(Render);
