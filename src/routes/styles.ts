import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  div{
    border: 1px solid rgba(30, 36, 50, 0.23);
    width: 100%;
    border-radius: 8px;
    display: flex;
    padding: 10px;
    gap: 10px;
  }
`;