import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

import TodoItem from "../components/TodoItem";
import { TodoListItem, ApplicationState, VisibilityFilters } from "../types";

const ListLayout = styled.ul`
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
`;

const TodoList: FunctionComponent<{ items: TodoListItem[] }> = ({ items }) => {
  return (
    <ListLayout>
      {items?.map((item: TodoListItem) => (
        <TodoItem key={item.id + item.text} item={item} />
      ))}
    </ListLayout>
  );
};
const filterItems = (items: TodoListItem[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter((item) => item.complete===0);
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter((item) => item.complete===1);
    default:
      return items;
  }
};
const mapStateToProps = (state: ApplicationState) => {
  return {
    items: filterItems(state.items.data, state.filterState),
    filterState: state.filterState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
