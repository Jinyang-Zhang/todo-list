import React, { FunctionComponent } from "react";

import PageLayout from "../components/PageLayout";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoFooter from "../components/TodoFooter";

const TODOS = "todos"

const Page: FunctionComponent = () => {
  return (
    <PageLayout>
      <h1>{TODOS}</h1>
      <div>
        <TodoHeader />
        <TodoList />
        <TodoFooter/>
      </div>
    </PageLayout>
  );
};

export default Page;
