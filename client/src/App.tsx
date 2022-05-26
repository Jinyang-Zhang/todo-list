import React, { FunctionComponent } from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { queryData } from "./api";
import Page from "./pages";
import { initItem } from "./store/actions";

const App: FunctionComponent = () => {
  useEffect(() => {
    queryData()
      .then((res) => {
        store.dispatch(initItem(res.results));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
