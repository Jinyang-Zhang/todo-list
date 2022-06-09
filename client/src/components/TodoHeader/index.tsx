import React, { FunctionComponent, useRef } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import styled from "styled-components";

import { ApplicationState } from "../../types";
import { addItem } from "../../store/action/items";
import { addTodoItem } from "../../api";

const HeaderLayout = styled.div`
  width: 580px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  & input {
    width: 520px;
    height: 33px;
    border: 1px solid #ddd;
    font: 400 30px Arial;
    &:focus {
      outline: none;
      border: 1px solid rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75),
        0 0 8px rgba(82, 168, 236, 0.6);
    }
  }
`;

const TodoHeader: FunctionComponent<{ addItem: (text: string) => void }> = ({
  addItem,
}) => {
  const inputText = useRef<HTMLInputElement>(null);
  const submitHandler = () => {
    if (inputText && inputText.current && inputText.current.value !== "") {
      addItem(inputText.current.value);
      addTodoItem(inputText.current.value);
      inputText.current.value = "";
    }
  };
  return (
    <HeaderLayout>
      <form>
        <input ref={inputText} placeholder="What needs to be done?" />
      </form>
      <button onClick={submitHandler}>add</button>
    </HeaderLayout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addItem: bindActionCreators(addItem, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);
