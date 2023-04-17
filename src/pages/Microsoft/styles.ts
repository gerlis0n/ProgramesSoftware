import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(120deg,#f0c9f8,#f7eff6);
`;

export const Main = styled.div`
  width: 440px;
  height: 372px;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 16px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.1);

  h3{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  input {
    padding: 0 8px;
    width: 376px;
    height: 38px;
    border: none;
    border-bottom: 1px solid #000;
    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: rgba(30, 36, 50, 0.6);
    }
  }
  p{
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    a{
      text-decoration: none;
      color: #0067B8;
      &:hover {
        color: #777;
        border-bottom: 1px solid #444;
      }
    }
  }

  fieldset{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 376px;
    border: none; 
    #proximo{
      font-weight: 700;
      padding: 4px 12px;
      font-size: 12px;
      line-height: 22px;
      letter-spacing: 0.4px;
      color: #FFFFFF;
      width: 108px;
      height: 32px;
      border-color: #0067B8;
      background: #0067B8;

      &:hover{
        cursor: pointer;
        background: #0055B8;
      }
    }
  }
`;

export const Options = styled.div`
  margin-top: 28px;
  div{
    width: 440px;
    display: flex;
    padding: 8px 48px;
    gap: 16px;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
      background: #eee;
   }
    h3{
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      height: 26px;
    }
  }
`