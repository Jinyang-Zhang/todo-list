import React, { createContext, ReactNode, ReactElement } from "react";

import { TodoListData } from "./types";

export const TodoListDataContext = createContext<TodoListData>(undefined);

type Props = {
  todoListData: TodoListData;
  children: ReactNode;
};

export const TodoListDataProvider = ({
  todoListData,
  children,
}: Props): ReactElement => (
  <TodoListDataContext.Provider value={todoListData}>
    {children}
  </TodoListDataContext.Provider>
);
