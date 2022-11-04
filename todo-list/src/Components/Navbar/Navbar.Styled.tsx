import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2em 0;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: blue;
`;

export const List = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  color: white;
  font-weight: 500;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
