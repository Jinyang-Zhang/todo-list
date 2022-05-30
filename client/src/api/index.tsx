export const queryData = () =>
  fetch("http://localhost:3001/", { method: "get" }).then((res) => res.json());

export const addTodoItem = (data: string) => {
  fetch("http://localhost:3001/addItem", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: data }),
  }).then((res) => res.json());
};

export const deleteTodoItem = (data: number) => {
  fetch("http://localhost:3001/deleteItem", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: data }),
  }).then((res) => res.json());
};

export const deleteCompletedTodoItem = () => {
  fetch("http://localhost:3001/deleteCompletedItem", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};


export const updateTodoItem = (id: number, complete: number) => {
  fetch("http://localhost:3001/updateItem", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, complete }),
  }).then((res) => res.json());
};

export const updateAllTodoItem = (complete: number) => {
  fetch("http://localhost:3001/updateAllItem", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ complete }),
  }).then((res) => res.json());
};
