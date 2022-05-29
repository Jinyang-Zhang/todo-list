export enum ItemsTypes {
  INIT_ITEM = "INIT_ITEM",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}
export interface ItemsState {
  data: TodoListItem[];
}
export interface TodoListActionTypes {
  type: string;
  payload?: TodoListItem;
  data?: TodoListItem[];
}

export interface ApplicationState {
  items: ItemsState;
}

export type TodoListItem = {
  id: number;
  text: string;
  complete: number;
};
