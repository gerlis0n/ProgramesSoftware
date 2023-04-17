import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #f0f2f5;
`;

export const Main = styled.div`
  height: 536px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 150px;
  padding: 20px 0px;
  gap: 32px;

`;

export const Aside = styled.div`
  display: inline-block;
  width: 580px;
  height: 298px;
  padding-right: 32px;
  background-color: #f0f2f5;
  img{
    width: 201px; 
  }
  h2{
    font-size: 28px;
    line-height: 32px;    
    padding: 0 0 20px;
    color: #1c1e21;
  }
`;

export const Body = styled.div`
  width: 396px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f2f5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #FFFFFF;
  padding: 20px 0px 28px;
  width:396px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  fieldset{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    gap: 16px;
    width: 396px;
    input{
      padding: 14px 16px;
      width: 364px;
      height: 52px;
      border-radius: 4px;
      border: 1px solid #DDDFE2;
      &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: #90949C;
      }
    }
  }
  hr{
    width: 364px;
    height: 1px;
    background: #D9D9D9;

  }
  #avancar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 364px;
    height: 48px;
    padding: 0px 16px;
    background: #4267B2;
    border-color: #4267B2 ;
    border-radius: 4px;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.4px;
    color: #FFFFFF;
    &:hover{
      cursor: pointer;
      background: #4257B2;
    }
  }
  a{
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #4267B2;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
  #novaConta{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    width: 166px;
    height: 48px;
    background: #42B72A;
    border-color: #42B72A;
    border-radius: 4px;
    font-weight: 700;
    font-size: 17px;
    line-height: 26px;
    letter-spacing: 0.4px;
    color: #FFFFFF;

    &:hover{
      cursor: pointer;
      background: #42A72A;
    }
  }
`;

export const Footer = styled.footer`
  display: block;
  text-align: center;
  margin-top: 28px;
  width: 396px;
  height: 37.5px;
  a{
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    color: #1c1e21;
  }
  p{
    color: #1c1e21;
    font-size: 14px;
  }
`;