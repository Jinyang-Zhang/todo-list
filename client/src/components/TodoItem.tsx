import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import styled from "styled-components";

import { TodoListItem } from "../types";
import { deleteTodoItem } from "../api";
import { removeItem } from "../store/actions";

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
  removeItem: (id: number) => void;
}> = ({ item, removeItem }) => {
  const { id, text } = item;
  const removeTodoItem = (id: number) => {
    removeItem(id);
    deleteTodoItem(id);
  };
  return (
    <ItemLayout>
      <label>
        <input type="checkbox" />
        <span>{text}</span>
      </label>
      <button onClick={() => removeTodoItem(id)}>X</button>
    </ItemLayout>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeItem: bindActionCreators(removeItem, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
