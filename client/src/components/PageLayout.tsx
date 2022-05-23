import styled from "styled-components";

const PageLayout = styled.div`
  width: 600px;
  margin: 0 auto;
  & > *:first-child {
    margin: 0px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }
  & > *:last-child {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

export default PageLayout;
