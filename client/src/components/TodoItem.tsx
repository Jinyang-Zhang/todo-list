import React, { FunctionComponent } from "react";
import styled from "styled-components";

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

const TodoItem: FunctionComponent = () => {
  const text: string = "aaaaaaaaaaaa";
  return (
    <ItemLayout>
      <label>
        <input type="checkbox" />
        <span>{text}</span>
      </label>
      <button>X</button>
    </ItemLayout>
  );
};

export default TodoItem;
