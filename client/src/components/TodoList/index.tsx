import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

import { filterItems } from "../../utils/filterItems";
import TodoItem from "../TodoItem";
import { TodoListItem, ApplicationState } from "../../types";

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

const mapStateToProps = (state: ApplicationState) => {
  return {
    items: filterItems(state.items.data, state.filterState),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
