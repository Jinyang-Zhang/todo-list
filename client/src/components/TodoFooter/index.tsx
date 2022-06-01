import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import TodoFilter from "./TodoFilter";
import { ApplicationState, TodoListItem, VisibilityFilters } from "../../types";
import { clearCompletedItem, toggleAllItem } from "../../store/action/items";
import {
  updateAllTodoItem,
  deleteCompletedTodoItem,
} from "../../api";

type FooterProps = {
  doneCounter: number;
};
const FooterLayout = styled.div`
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  justify-content: left;
  display: flex;
`;

const InputLayout = styled.input`
  position: relative;
  top: 1px;
  margin-right: 5px;
`;

const FilterLayout = styled.div`
  cursor: pointer;
  & > * {
    margin: 0 10px;
    cursor: pointer;
    color: rgb(126, 124, 124);
    :hover {
      color: rgba(175, 47, 47, 0.2);
    }
  }
`;

const ButtonLayout = styled.button<FooterProps>`
  border: none;
  color: rgb(126, 124, 124);
  background-color: #fff;
  padding: 4px 12px;
  cursor: pointer;
  display: ${(props) => (props.doneCounter > 0 ? "block" : "none")};
  :hover {
    color: #bd362f;
  }
`;

const ITEM_LEFT = "item left";
const ALL = "All";
const ACTION = "Active";
const COMPLETED = "Completed";
const CLEAR_COMPLETED = "Clear completed";

const TodoFooter: FunctionComponent<{
  items: TodoListItem[];
  toggleAllItem: (complete: number) => void;
  clearCompletedItem: () => void;
}> = ({ items, toggleAllItem, clearCompletedItem }) => {
  const counter = items.filter((item) => item.complete === 0).length;
  const doneCounter = items.filter((item) => item.complete === 1).length;
  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleAllItem(event.target.checked ? 1 : 0);
    updateAllTodoItem(event.target.checked ? 1 : 0);
  };
  const removeCompletedItem = () => {
    clearCompletedItem();
    deleteCompletedTodoItem();
  };
  return (
    <FooterLayout>
      <div>
        <InputLayout
          type="checkbox"
          onChange={handleCheckAll}
          checked={
            doneCounter === doneCounter + counter && doneCounter + counter !== 0
          }
        />
        <span>
          {counter} {ITEM_LEFT}
        </span>
      </div>
      <FilterLayout>
        <TodoFilter filter={VisibilityFilters.SHOW_ALL}>{ALL}</TodoFilter>
        <TodoFilter filter={VisibilityFilters.SHOW_ACTIVE}>{ACTION}</TodoFilter>
        <TodoFilter filter={VisibilityFilters.SHOW_COMPLETED}>
          {COMPLETED}
        </TodoFilter>
      </FilterLayout>
      <ButtonLayout
        doneCounter={doneCounter}
        onClick={() => removeCompletedItem()}
      >
        {CLEAR_COMPLETED}
      </ButtonLayout>
    </FooterLayout>
  );
};

const filterItems = (items: TodoListItem[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return items.filter((item) => item.complete === 0);
    case VisibilityFilters.SHOW_COMPLETED:
      return items.filter((item) => item.complete === 1);
    default:
      return items;
  }
};
const mapStateToProps = (state: ApplicationState) => ({
  items: filterItems(state.items.data, state.filterState),
  filterState: state.filterState,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearCompletedItem: bindActionCreators(clearCompletedItem, dispatch),
  toggleAllItem: bindActionCreators(toggleAllItem, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);
