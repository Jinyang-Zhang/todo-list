import React, { useContext, FunctionComponent } from "react";
import styled from "styled-components";
import { TodoListDataContext } from "../useTodoListData";
import TodoItem from "../components/TodoItem";
import { TodoListItem } from "../types";

const ListLayout = styled.ul`
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
`;

const TodoList: FunctionComponent = () => {
  const todoListData = useContext(TodoListDataContext);
  return (
    <ListLayout>
      {todoListData?.map((item: TodoListItem) => (
        <TodoItem todoItem={item} />
      ))}
    </ListLayout>
  );
};

export default TodoList;
