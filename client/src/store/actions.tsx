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
