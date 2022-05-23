import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { queryData } from "./api";
import { TodoListDataProvider } from "./useTodoListData";
import Page from "./pages";

const App: FunctionComponent = () => {
  const [data, setData] = useState([
    {
      id: 1,
      text: "learn AWS",
      complete: false,
    },
  ]);
  useEffect(() => {
    queryData()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <TodoListDataProvider todoListData={data}>
      <Page />
    </TodoListDataProvider>
  );
};

export default App;
