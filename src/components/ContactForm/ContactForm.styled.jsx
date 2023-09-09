import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 10px;
  width: 150px;
  background-color: #0970e7;
  font-size: 18px;
  border-radius: 14px;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: black;
  }
`;
export const Form = styled.form`
  max-width: 500px;
  border: 2px solid black;
  margin: 50px auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
