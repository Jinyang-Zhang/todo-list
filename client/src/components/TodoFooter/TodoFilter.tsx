import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import * as filterActions from "../../store/filter";
import { ApplicationState } from "../../types";

interface DispatchProps {
  updateFilter(filter: string): void;
}

interface OwnProps {
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
