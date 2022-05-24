export type TodoListItem = {
  id: number;
  text: string;
  complete: number;
};
export type TodoListData = TodoListItem[] | undefined;
