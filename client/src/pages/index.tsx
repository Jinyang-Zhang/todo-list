import React, { FunctionComponent } from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";

import store from "../store";
import { queryData } from "../api";
import { initItem } from "../store/action/items";
import PageLayout from "../components/PageLayout";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoFooter from "../components/TodoFooter";

const TODOS = "todos";

const Page: FunctionComponent = () => {
  useEffect(() => {
    queryData()
      .then((res) => {
        store.dispatch(initItem(res.results));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Provider store={store}>
      <PageLayout>
        <h1>{TODOS}</h1>
        <div>
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </div>
      </PageLayout>
    </Provider>
  );
};

export default Page;
