import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

import TodoItem from "../components/TodoItem";
import { TodoListItem, ApplicationState } from "../types";

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
  console.log("mapStateToProps:" + state.items.data[0]);
  return {
    items: state.items.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
