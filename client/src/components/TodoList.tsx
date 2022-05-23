import React, { FunctionComponent } from "react";
import styled from "styled-components";
import TodoItem from "../components/TodoItem";

const ListLayout = styled.ul`
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
`;

const TodoList: FunctionComponent = () => {
  const items: Record<string, string>[] = [{ a: "learn" }];
  return (
    <ListLayout>
      {items.map((item, index) => (
        <TodoItem></TodoItem>
      ))}
    </ListLayout>
  );
};

export default TodoList;
