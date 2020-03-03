import React from "react";
import { connect } from "react-redux";
import { showSidebar, hideSidebar } from "../../redux/actions/sidebarActions";

import Dashboard from "../dashboards/Default";

class SidebarCollapsed extends React.Component {
  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
    dispatch(hideSidebar());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(showSidebar());
  }

  render() {
    return <Dashboard />;
  }
}

export default connect()(SidebarCollapsed);
