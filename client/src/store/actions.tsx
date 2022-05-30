import { ItemsTypes, TodoListItem } from "../types";

export const initItem = (data: TodoListItem[]) => {
  return {
    type: ItemsTypes.INIT_ITEM,
    data: data,
  };
};

export const addItem = (text: string) => {
  return {
    type: ItemsTypes.ADD_ITEM,
    payload: {
      text,
    },
  };
};

export const removeItem = (id: number) => ({
  type: ItemsTypes.REMOVE_ITEM,
  payload: {
    id,
  },
});

export const toggleItem = (id: number) => ({
  type: ItemsTypes.TOGGLE_ITEM,
  payload: {
    id,
  },
});

export const toggleAllItem = (complete: number) => ({
  type: ItemsTypes.TOGGLE_ALL_ITEM,
  payload: {
    complete,
  },
});

export const clearCompletedItem = () => ({
  type: ItemsTypes.CLEAR_COMPLETED_ITEM,
});