import { ItemsState, ItemsTypes, TodoListActionTypes } from "../../types";

const initialState: ItemsState = {
  data: [],
};

function items(state = initialState, action: TodoListActionTypes) {
  switch (action.type) {
    case ItemsTypes.INIT_ITEM:
      return {
        data: action.data && [...action.data],
      };

    case ItemsTypes.ADD_ITEM:
      return {
        data: [
          ...state.data,
          {
            id: state.data.length + 1,
            text: action.payload?.text,
            complete: 0,
          },
        ],
      };

    case ItemsTypes.REMOVE_ITEM:
      return {
        data: state.data.filter((item) => item.id !== action.payload?.id),
      };

    case ItemsTypes.CLEAR_COMPLETED_ITEM:
      return {
        data: state.data.filter((item) => item.complete === 0),
      };

    case ItemsTypes.TOGGLE_ITEM:
      return {
        data: state.data.map((item) =>
          item.id === action.payload?.id
            ? { ...item, complete: item.complete === 0 ? 1 : 0 }
            : item
        ),
      };

    case ItemsTypes.TOGGLE_ALL_ITEM:
      return {
        data: state.data.map((item) => ({
          ...item,
          complete: action.payload?.complete,
        })),
      };

    default:
      return state;
  }
}
export default items;
