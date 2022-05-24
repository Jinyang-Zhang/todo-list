export const queryData = () =>
  fetch("http://localhost:3001/", { method: "get" }).then((res) => res.json());

export const addItem = (data: string) => {
  fetch("http://localhost:3001/addItem", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: data }),
  }).then((res) => res.json());
};

export const deleteItem = (data: number) => {
  fetch("http://localhost:3001/deleteItem", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: data }),
  }).then((res) => res.json());
};
