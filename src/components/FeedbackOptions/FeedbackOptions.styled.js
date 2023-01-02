import styled from 'styled-components';

export const OptionList = styled.ul`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  font-family: inherit;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 500;
  color: #212529;
  text-align: center;
  cursor: pointer;
  background-color: #eee;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  transition: color 250ms linear, background-color 250ms linear,
    box-shadow 250ms linear;

  :hover,
  :focus {
    color: #fff;
    background-color: #2463ef;
    box-shadow: 0 0 0 0.2rem rgba(36, 99, 239, 0.25);
  }
`;
