export enum ItemsTypes {
  INIT_ITEM = "INIT_ITEM",
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  TOGGLE_ITEM = 'TOGGLE_ITEM',
  TOGGLE_ALL_ITEM = "TOGGLE_ALL_ITEM",
  CLEAR_COMPLETED_ITEM = "CLEAR_COMPLETED_ITEM",
}
export enum VisibilityFilters {
  SHOW_ALL = "SHOW_ALL",
  SHOW_ACTIVE = "SHOW_ACTIVE",
  SHOW_COMPLETED = "SHOW_COMPLETED",
  UPDATE_FILTER = "UPDATE_FILTER",
}

export type FilterActionTypes = {
  type: string;
  payload: {
    filter: string;
  };
}
export type ItemsState = {
  data: TodoListItem[];
}
export type TodoListActionTypes = {
  type: string;
  payload?: TodoListItem;
  data?: TodoListItem[];
}

export type ApplicationState = {
  items: ItemsState;
  filterState: string;
}

export type TodoListItem = {
  id: number;
  text: string;
  complete: number;
};
