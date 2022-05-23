import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { queryData } from "../api";
import PageLayout from "../components/PageLayout";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

const Page: FunctionComponent = () => {
  const [data, setData] = useState({ name: "aaa" });
  useEffect(() => {
    queryData()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <PageLayout>
      <h1>todos</h1>
      <div>{data.name}</div>
      <div>
        <TodoHeader />
        <TodoList />
      </div>
    </PageLayout>
  );
};

export default Page;
