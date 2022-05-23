import React, { FunctionComponent } from "react";

import PageLayout from "../components/PageLayout";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

const Page: FunctionComponent = () => {
  return (
    <PageLayout>
      <h1>todos</h1>
      <div>
        <TodoHeader />
        <TodoList />
      </div>
    </PageLayout>
  );
};

export default Page;
