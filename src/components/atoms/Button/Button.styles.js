import styled from 'styled-components';

export const Button = styled.button`
  padding: 4px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  border: none;
  border-radius: 20px;
  margin: 10px 0;
`;
