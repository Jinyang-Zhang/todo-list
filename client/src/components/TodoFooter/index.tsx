import React, { FunctionComponent } from "react";
import styled from "styled-components";
import TodoFilter from "./TodoFilter";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { ApplicationState, TodoListItem, VisibilityFilters } from "../../types";
import { clearCompletedItem, toggleAllItem } from "../../store/actions";
import { updateAllTodoItem, deleteCompletedTodoItem } from "../../api";

type FooterProps = {
  doneCounter: number;
};
const FooterLayout = styled.div<FooterProps>`
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  justify-content: left;
  display: flex;
  & > input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  & > button {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    display: ${(props) => (props.doneCounter > 0 ? "block" : "none")};
  }
`;

const FilterLayout = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  right: 0;
  left: 700px;
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
    <FooterLayout doneCounter={doneCounter}>
      <div>
        <input
          type="checkbox"
          onChange={handleCheckAll}
          checked={
            doneCounter === doneCounter + counter && doneCounter + counter !== 0
          }
        />
        <span>{counter} item left</span>
      </div>
      <FilterLayout>
        <TodoFilter filter={VisibilityFilters.SHOW_ALL}>All</TodoFilter>
        <TodoFilter filter={VisibilityFilters.SHOW_ACTIVE}>Active</TodoFilter>
        <TodoFilter filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </TodoFilter>
      </FilterLayout>
      <button onClick={() => removeCompletedItem()} className="btn btn-danger">
        Clear completed
      </button>
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
