import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import * as filterActions from "../../store/action/filter";
import { ApplicationState } from "../../types";

type DispatchProps = {
  updateFilter(filter: string): void;
}

type OwnProps = {
  children: string;
  filter: string;
}

type Props = DispatchProps & OwnProps;

const TodoFilter = ({ children, updateFilter, filter }: Props) => (
  <span onClick={() => updateFilter(filter)}>{children}</span>
);

const mapStateToProps = (state: ApplicationState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(filterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
