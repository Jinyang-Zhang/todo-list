import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import styled from "styled-components";

import { TodoListItem, ApplicationState } from "../../types";
import { deleteTodoItem, updateTodoItem } from "../../api";
import { removeItem, toggleItem } from "../../store/action/items";

const ItemLayout = styled.li`
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  & label {
    float: left;
    cursor: pointer;
    & input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }
  }
  & button {
    border-bottom: none;
    float: right;
    margin-top: 10px;
    box-shadow: none !important;
    background-color: #fff;
    border: none;
    &:hover {
      color: #da4f49;
      border: 1px solid #da4f49;
    }
  }
`;

const TodoItem: FunctionComponent<{
  item: TodoListItem;
  toggleItem: (id: number, complete: number) => void;
  removeItem: (id: number) => void;
}> = ({ item, toggleItem, removeItem }) => {
  const { id, text, complete } = item;
  const removeTodoItem = (id: number) => {
    removeItem(id);
    deleteTodoItem(id);
  };
  const toggleTodoItem = (id: number, complete: number) => {
    const completeStatus = complete === 0 ? 1 : 0;
    toggleItem(id, completeStatus);
    updateTodoItem(id, completeStatus);
  };
  return (
    <ItemLayout>
      <label>
        <input
          type="checkbox"
          checked={complete === 1}
          onChange={() => toggleTodoItem(id, complete)}
        />
        <span>{text}</span>
      </label>
      <button onClick={() => removeTodoItem(id)}>X</button>
    </ItemLayout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  filterState: state.filterState,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleItem: bindActionCreators(toggleItem, dispatch),
  removeItem: bindActionCreators(removeItem, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
