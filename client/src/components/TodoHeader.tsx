import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import {addItem} from "../api"

const PageLayout = styled.div`
  width: 580px;
  margin: 0 auto;
  & button {
    margin-top: 9px;
    margin-right: 5px;
    float: right;
  }
  & input {
    width: 520px;
    height: 33px;
    border: 1px solid #ddd;
    font: 400 30px Arial;
    outline: none !important;
    &:focus {
      outline: none;
      border: 1px solid rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75),
        0 0 8px rgba(82, 168, 236, 0.6);
    }
  }
`;

const TodoHeader: FunctionComponent = () => {
  const inputText = useRef<HTMLInputElement>(null);
  const submitHandler = () =>{
    if (inputText && inputText.current && inputText.current.value !== "") {
      addItem(inputText.current.value);
      inputText.current.value = "";
    }
  }
  return (
    <PageLayout>
      <button onClick={submitHandler}>add</button>
      <form>
        <input ref={inputText} placeholder="What needs to be done?" />
      </form>
    </PageLayout>
  );
};

export default TodoHeader;
