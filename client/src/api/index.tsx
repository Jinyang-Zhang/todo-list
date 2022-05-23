export const queryData = () =>
  fetch("http://localhost:3001/", { method: "get" }).then((res) => res.json());
