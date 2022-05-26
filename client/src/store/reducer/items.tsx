import { ItemsState, ItemsTypes, TodoListActionTypes } from "../../types";

const initialState: ItemsState = {
  idNumber: 0,
  data: [],
};

function items(state = initialState, action: TodoListActionTypes) {
  switch (action.type) {
    case ItemsTypes.INIT_ITEM:
      return {
        data: action.data && [state.data, ...action.data],
      };

    case ItemsTypes.ADD_ITEM:
      return {
        idNumber: state.idNumber + 1,
        data: [
          ...state.data,
          {
            id: state.idNumber,
            text: action.payload?.text,
            complete: false,
          },
        ],
      };

    case ItemsTypes.REMOVE_ITEM:
      return {
        data: state.data.filter((item) => item.id !== action.payload?.id),
      };

    default:
      return state;
  }
}
export default items;
