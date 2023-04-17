import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 500px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 40px 36px;
  gap: 32px;
  width: 500px;
  background: #FFFFFF;
  border: 1px solid #DADCE0;
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  gap: 16px;
  padding: 0px 40px;
  color: #202124;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  p{
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
  gap: 16px;
  width: 500px;
  input {
    padding: 15px 12px;
    border: 1px solid rgba(30, 36, 50, 0.23);
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #727272;
  }
  #esqueceuEmail {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #1A73E8;
  }
  fieldset{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 420px;
    margin-top: 26px;
    border: none;
    #criarConta {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      text-align: right;
      color: #1A73E8;
    }
    input{
      padding: 6px 24px;
      border-radius: 4px;
      background: #1A73E8;
      border-color: #1A73E8;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.4px;
      color: #FFFFFF;
      &:hover{
        cursor: pointer;
        background-color: #1A59E8;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  select {
    padding: 8px 8px 8px 16px;
    border:none;
    option {
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      color: #202124;
    }
  }
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    h4{
      padding: 6px 16px;
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
    }
  }
`;