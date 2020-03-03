import React from "react";
import { connect } from "react-redux";
import { enableClassicTheme } from "../../redux/actions/themeActions";

import Dashboard from "../dashboards/Default";

class ThemeClassic extends React.Component {
  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
    dispatch(enableClassicTheme());
  }

  render() {
    return <Dashboard />;
  }
}

export default connect()(ThemeClassic);
