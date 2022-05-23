export type TodoListItem = {
  id: number;
  text: string;
  complete: boolean;
};
export type TodoListData = TodoListItem[] | undefined;
