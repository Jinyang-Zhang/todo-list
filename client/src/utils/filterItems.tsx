import { TodoListItem, VisibilityFilters } from "../types";

export const filterItems = (items: TodoListItem[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter((item) => item.complete === 0);
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter((item) => item.complete === 1);
    default:
      return items;
  }
};
